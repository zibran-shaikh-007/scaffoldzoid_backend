const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 7777;


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


//routes
const user_registration = require('./routes/user');
const seller = require("./routes/seller");
const buyer = require("./routes/buyer")


app.use("/user", user_registration)
app.use("/seller", seller)
app.use("/buyer", buyer)




//running server
app.listen(PORT, ()=>console.log(`Server has started at PORT ${PORT}`))

