const multer = require('multer');
const sharp = require('sharp');
const User = require('../models/user')

/* Handle Image uplaod and resizing */

const multerStorage = multer.memoryStorage()

// Allow just picture format files
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('Not an image! Please upload only images.', false)
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadUserPhoto = upload.single('photo') // 'photo' indicates the name of the file upload form field

exports.resizeUserPhoto = async (req, res, next) => {
    try {
        if (!req.file) return next()

        req.file.filename = `user-${req.params.id}-${Date.now()}.jpeg`

        await sharp(req.file.buffer)
            .resize(500, 500)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`public/img/users/${req.file.filename}`)

        next();
    } catch (err) {

    }
}


// Filter unwanted fields
const filterObj = (obj, ...allowedFields) => {
    const newObj = {}
    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el)) newObj[el] = obj[el]
    })
    return newObj
};


exports.updateUser = async (req, res, next) => {
    try {
        // Filter out unwanted fields names that are not allowed to be updated
        const filteredBody = filterObj(req.body, 'fullName', 'email', 'phoneNumber')
        if (req.file) filteredBody.photo = req.file.filename
    
        // Update user document
        const updatedUser = await User.findByIdAndUpdate(req.params.id, filteredBody, {
            new: true,
            runValidators: true
        });
    
        res.status(200).json({
            status: 'success',
            data: {
                user: updatedUser
            }
        });
    } catch (err) {

    }
}


exports.getUser = async (req, res) => {
    const doc = await User.findById(req.params.id)

    if (!doc) {
        return res.status(400).json({
            status: 'fail',
            message: 'User not found!'
        })
    }

    res.status(200).json({
        status: 'success',
        data: {
            data: doc
        }
    })
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