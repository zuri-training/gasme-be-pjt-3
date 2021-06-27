const multer = require('multer');
const sharp = require('sharp');
const User = require('../models/user');
const drive = require('./../utils/googleDrive')
const fs = require('fs')

const {filterObj} = require('../utils/util');
const {
    resNotFound,
    resInternalError,
    resSuccess
} = require('../utils/custom_responses');



const multerStorage = multer.memoryStorage()

// File filter
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(console.log('Valid file type(Image)'), true)  // if an image is uploaded
    } else {
        cb(console.log('Invalid file format uploaded!'), false)  // if file uploaded is not an image
    }
}
  
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

exports.uploadPhoto = upload.single('photo') // 'photo' indicates the name of the file upload form field

exports.uploadPhotoToGoogleDrive = async (req, res, next) => {
    try {

        if (!req.file) {
            return resNotFound(res, 'Only jpg or png images are allowed')
        }
  
        req.file.filename = `profile-${req.user.id}-${Date.now()}.jpg` // create unique filename with user id and timestamp
  
        // resize image and convert to jpg
        await sharp(req.file.buffer)
          .resize(1000, 1000)
          .toFormat('jpeg')
          .jpeg({ quality: 100 })
          .toFile(`${__dirname}/${req.file.filename}`) // temporarily store in file system
  
        // upload image to 'profile-photos' folder on google drive
        const response = await drive.files.create({
          resource: {
            name: req.file.filename, 
            parents: [process.env.PROFILE_PHOTOS_FOLDER_ID]  // ID of 'profile-photos' folder
          },
          media: {
            mimeType: 'image/jpg',
            body: fs.createReadStream(`${__dirname}/${req.file.filename}`) // upload from file sytem to google drive
          }
        });
        
        console.log('Success: Image uploaded to google drive!')
        console.log(response.data)
        
        // delete temporal image saved on file system
        fs.unlink(`${__dirname}/${req.file.filename}`, (err) => {
          if (err) {
            console(err)
          }
          console.log('Temp image file deleted!')
        })

        // Get google drive link of the uploaded photo  
        const imageUrl = `https://drive.google.com/file/d/${response.data.id}/view?usp=sharing`
        console.log(`Link: ${imageUrl}`)
        console.log('Image link is now sharable!')

        // Update user photo
        const updatedUser = await User.findByIdAndUpdate(req.user._id, {imageUrl}, {
            new: true,
            runValidators: true
        })
        if (!updatedUser) return resNotFound(res, 'User not found')
        return resSuccess(res, 200, {updatedUser})
        
  
      } catch (error) {
        console.log(error.message)
        return resNotFound(res, 'An error occurred!')
        
    }
}


exports.updateUser = async (req, res) => {
    try {
        // Filter out unwanted fields names that are not allowed to be updated
        const filteredBody = filterObj(req.body, 'fullName', 'phoneNumber', 'location')
            
        // Update user document
        const updatedUser = await User.findByIdAndUpdate(req.user._id, filteredBody, {
            new: true,
            runValidators: true
        });
        if (!updatedUser) return resNotFound(res, 'User not found');
        
        return resSuccess(res, 200, {updatedUser});
    } catch (err) {
        return resInternalError(res);
    }
}


exports.getUser = async (req, res) => {
    
    try {
        const doc = await User.findById(req.params.id)

        if (!doc) return resNotFound(res, 'User not found!')

        return resSuccess(res, 200, {user: doc});
    } catch (error) {
        return resInternalError(res);
    }
    
}


exports.deleteUser = async (req, res) => {
    const doc = await User.findByIdAndDelete(req.params.id)

    if (!doc) {
        return res.status(400).json({
            status: 'fail',
            message: 'User not found!'
        })
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
};