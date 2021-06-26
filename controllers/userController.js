const multer = require('multer');
const sharp = require('sharp');
const User = require('../models/user');
const {filterObj} = require('../utils/util');
const {
    resNotFound,
    resInternalError,
    resSuccess
} = require('../utils/custom_responses');

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



exports.updateUser = async (req, res) => {
    try {
        // Filter out unwanted fields names that are not allowed to be updated
        const filteredBody = filterObj(req.body, 'fullName', 'phoneNumber', 'location')
        if (req.file) filteredBody.photo = req.file.filename;
    
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