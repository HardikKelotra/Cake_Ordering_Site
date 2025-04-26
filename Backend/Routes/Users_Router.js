const express = require("express")

const { AllOrdersUsers ,PlaceOrders ,OrderCancel} = require("../controllers/order")

const { UserSignUp ,UserLogin} =require("../controllers/Login_signUp")

const {CheckLoggedIn} = require("../middlewares/Authentication")

const UserRouter= express.Router();


UserRouter.get("/order",CheckLoggedIn,AllOrdersUsers)

UserRouter.post("/place_order",CheckLoggedIn,PlaceOrders)

UserRouter.post("/cancel_order",CheckLoggedIn,OrderCancel)

UserRouter.post("/SignUp",UserSignUp);

UserRouter.post("/Login",UserLogin);


module.exports = {
    UserRouter
}