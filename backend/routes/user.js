const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const connection = require('../config');
const { use } = require('./seller');


router.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body;
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    let user = {
        "username": username,
        "email": email,
        "password": encryptedPassword,
        "role": role
    }

    connection.query('SELECT * FROM users WHERE email = ?', [email], async function (error, results, fields) {
        if (error) {
            res.status(206).json({
                success: false,
                message: `Error occured while registration`,
                err: error
            })
        } else {
            if (results.length > 0) {
                res.status(206).json({
                    success: false,
                    message: `This account already exist. Please login to continue`,
                })
            } else {
                connection.query('INSERT INTO users SET ?', user, function (error, results, fields) {
                    if (error) {
                        res.status(206).json({
                            success: false,
                            message: `Error occured while registration`,
                            error: error

                        })                        
                    } else {
                        user["id"] = results.insertId;
                        res.status(200).json({
                            success: true,
                            message: "Registered sucessfully. Please login.",
                            data: user
                        });
                    }
                });
            }
        }
    })
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    connection.query('SELECT * FROM users WHERE email = ?', [email], async function (error, results, fields) {
        if (error) {
            res.status(206).json({
                success: false,
                msg: `Error occured while login`,
                error: error
            })
        } else {
            if (results.length > 0) {
                const comparision = await bcrypt.compare(password, results[0].password)
                if (comparision) {
                    res.status(200).json({
                        success: true,
                        message: "Login sucessfully",
                        data: results[0]
                    });
                } else {
                    res.status(206).json({
                        success: false,
                        message: `Incorrect password. Please enter your correct password`
                    })
                }
            } else {
                res.status(206).json({
                    success: false,
                    message: `This account does not exist. Please register.`
                })
            }
        }
    });
})

module.exports = router