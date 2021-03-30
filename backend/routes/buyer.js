const express = require('express');
const router = express.Router();

const connection = require('../config');

router.get('/all-sellers', async (req, res) => {    
    connection.query("SELECT u.id, u.username, u.email, p.id as 'profile_id', p.picture, p.description FROM users u LEFT JOIN profiles p ON p.user_id = u.id WHERE u.role = 'seller'", async (err, sellers) => {
         if (err) {
             res.status(206).json({
                 success: false,
                 message: `Error occured while fetching all users`,
                 error: err
             })
         } else {             
             res.status(200).json({
                 success: true,
                 message: `All Sellers`,
                 data: sellers
             })
         }
     })
 })


//  router.get('/seller-profile-rates/:user_id', async (req, res) => {
//     const { user_id } = req.params 
//      connection.query("SELECT * FROM products where user_id = ?", user_id, async (err, products) => {
//          if (err) {
//              res.status(206).json({
//                  success: false,
//                  message: `Error occured while fetching seller profile and rate charts`,
//                  error: err
//              })
//          } else {             
//              res.status(200).json({
//                  success: true,
//                  message: `Product list`,
//                  data: products
//              })
//          }
//      })
//  })

module.exports = router