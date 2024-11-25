const express = require("express");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();
const dotenv = require("dotenv");
const User = require("../Models/userModel");


dotenv.config();
const secretKey = process.env.secretkey


router.post("/signup", async (req, res) => {

    const { username, email, password, userrole } = req.body

    const existingUser = await User.findOne({ email: email })

    try {
        if (existingUser) {

            res.status(409).json({ message: "email already exist" })
        } else {
            const newP = await bcrypt.hash(password, 10)
            console.log(newP);

            const newUser = new User({
                username: username,
                email: email,
                password: newP,
                userrole:userrole
            })

            await newUser.save();
            res.status(200).json({ message: "Register Successfull" })

        }
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})


router.post("/login", async (req, res) => {

    const { email, password } = req.body

    const result = await User.findOne({ email: email })

    try {

        if (!result) {
            res.status(401).json({ message: "invalid email" })
        } else {

            const isvalid = await bcrypt.compare(password, result.password)
            console.log(isvalid);

            if (isvalid) {

                const token = jwt.sign({ username: result.username, userrole: result.userrole }, secretKey, { expiresIn: "1d" })
                console.log(token);
                res.cookie("Authtoken", token, {
                    httpOnly: true,
                    secure: false,
                    sameSite: "strict",


                });

                res.status(200).json({ message: "login Sucessfull",token})

            } else {
                res.status(401).json({ message: "invalid password" })
            }
        }

    } catch (error) {

        res.status(500).json({ message: error.message })


    }

})


module.exports = router
