const express = require('express');
const router = express.Router();

const connection = require('../config');

router.post('/profile', async (req, res) => {
    const { user_id, picture, description } = req.body;
    const profile = {
        "picture": picture, "description": description,
    }

    connection.query("SELECT * FROM profiles  Where user_id = ?", user_id, async (err, result) => {
        if (err) {
            res.status(206).json({
                success: false,
                message: `Error occured while getting seller profile`,
                error: err
            })
        } else {
            if (result.length > 0) {
                connection.query("UPDATE profiles Set ? Where user_id = ?", [profile,user_id], async (err, result) => {
                    if (err) {
                        res.status(206).json({
                            success: false,
                            message: `Error occured while creating seller profile`,
                            error: err
                        })
                    } else {
                        profile["id"] = result.insertId;
                        res.status(200).json({
                            success: true,
                            message: `Seller profile updated Succesfully`,
                            data: profile
                        })
                    }
                })
            } else {
                profile["user_id"] = user_id
                connection.query("INSERT INTO profiles Set ? ", profile, async (err, result) => {
                    if (err) {
                        res.status(206).json({
                            success: false,
                            message: `Error occured while creating seller profile`,
                            error: err
                        })
                    } else {
                        profile["id"] = result.insertId;
                        res.status(200).json({
                            success: true,
                            message: `Seller profile created Succesfully`,
                            data: profile
                        })
                    }
                })

            }

        }
    })



})

router.get('/profile/:user_id', async (req, res) => {
    const { user_id } = req.params

    connection.query("SELECT * FROM profiles where user_id = ?", user_id, async (err, result) => {
        if (err) {
            res.status(206).json({
                success: false,
                message: `Error occured while fetching profile`,
                error: err
            })
        } else {
            let profile = result[0]
            res.status(200).json({
                success: true,
                message: `Seller profile`,
                data: profile
            })
        }
    })
})

router.post('/product-add', async (req, res) => {
    const { user_id, name, rate } = req.body;
    const product = {
        "user_id": user_id, "name": name, "rate": rate,
    }

    connection.query("INSERT into products Set ?", product, async (err, result) => {
        if (err) {
            res.status(206).json({
                success: false,
                message: `Error occured while adding oranges`,
                error: err
            })
        } else {
            product["id"] = result.insertId;
            res.status(200).json({
                success: true,
                message: `Orange added successfully!`,
                data: product
            })
        }
    })
})

router.get('/product/all/:user_id', async (req, res) => {
    const { user_id } = req.params
    connection.query("SELECT * FROM products where user_id = ?", user_id, async (err, products) => {
        if (err) {
            res.status(206).json({
                success: false,
                message: `Error occured while fetching rate chart`,
                error: err
            })
        } else {
            res.status(200).json({
                success: true,
                message: `Product List`,
                data: products
            })
        }
    })
})

router.get('/product/:id', async (req, res) => {
    const { id } = req.params
    connection.query("SELECT * FROM products where id = ?", id, async (err, result) => {
        if (err) {
            res.status(206).json({
                success: false,
                message: `Error occured while fetching rate`,
                error: err
            })
        } else {
            let product = result[0]
            res.status(200).json({
                success: true,
                message: `Products fetched`,
                data: product
            })
        }
    })
})

router.put('/product-update', async (req, res) => {
    const { id, user_id, name, rate } = req.body;
    const product = {
        "user_id": user_id, "name": name, "rate": rate,
    }

    connection.query("UPDATE products SET ? WHERE id = ?", [product, id], async (err, result) => {
        if (err) {
            res.status(206).json({
                success: false,
                message: `Error occured while updating rate`,
                error: err
            })
        } else {
            product["id"] = id
            res.status(200).json({
                success: true,
                message: `Product updated`,
                data: product
            })
        }
    })
})





module.exports = router