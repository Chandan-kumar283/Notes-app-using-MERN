const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require ('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'ch@nd@nkumarsaw'
const fetchuser = require('../middleware/fetchuser')

// ROUTE:1 Create a User using: POST "/api/auth/createuser" . Doesn't require Login.
router.post('/createuser', [
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 5 characters long'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 8 characters')
], async (req, res) => {
    // If there are errors return Bad request and the errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    // Check weather this email exsits already or not
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ success, error: 'Please enter the valid email' })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        const data ={
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        // console.log(jwtdata)
        success=true;
        res.json( {success, authtoken})
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some error Occured")
    }

})
// ROUTE2: Autenticate a User using: POST "/api/auth/login" . Doesn't require Login.
router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').exists().withMessage("Password Can't be blank")
], async (req, res) => {
     // If there are errors return Bad request and the errors
     let success = false;
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
     }
     const {email, password} = req.body;
     try {
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({ success, error: 'Incorrect crendtials, Try again' })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare){
            return res.status(400).json({ success , error: 'Incorrect crendtials, Try again' })
        }
        const data ={
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        // console.log(jwtdata)
        success = true;
        res.json( {success, authtoken})
     } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
     }
})
// ROUTE 3: Get loggedin User Detail using: GET "/api/auth/getuser" . Login Require.
router.post('/getuser', fetchuser, async (req, res) => {
try {
    userId= req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user)
} catch (error) {
    console.error(error.message)
    res.status(500).send("Internal Server Error")
}})
module.exports = router
