const User = require('../models/user');
const bcrypt = require('bcryptjs');
const {createToken} = require('../utils/auth');

// signup user
module.exports.signUp = async (req, res) => {

    // Destructure request body
    const {
        email,
        password,
        fullName,
        phoneNumber,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({email});

    if (existingUser) {
        return res.status(400).json({
            error: true,
            message: "A user with this email already exists"
        });
    }

    
        try {
            // Create a new user from data provided
            const newUser = await new User({email, fullName, phoneNumber});
            const salt = await bcrypt.genSalt(10);

            // Hash their password before saving
            if (password.length) {
                newUser.password = await bcrypt.hash(password, salt);;
                const savedNewUser = await newUser.save();

                // Return token as cookie with a 3 days expiration date
                const token = createToken(
                    savedNewUser._id, savedNewUser.email, savedNewUser.fullName
                    );
                res.cookie('jwt', token, {httpOnly: true, maxAge: 3 * 24 * 3600 * 1000});

                // Respond with a success message and the user object
                res.status(201).json({
                    error: false,
                    message: 'user created successfully',
                    user: savedNewUser
                });

            } else {
                throw new Error ('password is required')
            }
            

            
        } catch (error) {
            
            // Catch errors. Proper error handling to be worked on
            return res.status(500).json({
                error: true,
                message: "Oops, an error occurred"
            });
        }
    

}