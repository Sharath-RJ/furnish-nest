const customerControler=require('../controller/customerControler')
const is_User = require("../middleware/customer_auth")
const is_Blocked=require('../middleware/customer_block')
var express = require("express")
var router = express.Router()
router.get("/", customerControler.loginPage)
router.get("/login", customerControler.loadLoginPage)
router.get("/registerLoad",  customerControler.registerLoad)
router.post("/signup", customerControler.insertingUser)
router.post("/verify", customerControler.insertUser)
router.get("/sendingOTP",  customerControler.sendingOTP)
router.get("/sendingOtpAgain",  customerControler.sendingOtpAgain)
router.post("/login",is_Blocked, customerControler.userLogin)
router.get("/forgotPassword",is_Blocked, customerControler.forgotPasswordLoad)
router.post("/forgotPassword", is_Blocked, customerControler.forgotPassword)
router.post("/verifyUser",is_Blocked, customerControler.verifyUserResetPassword)
router.post("/resetPassword",is_Blocked,customerControler.resetPassword)
router.get("/resetPassword",is_Blocked,customerControler.resetPasswordLoad)
router.get("/continueShopping",is_Blocked, customerControler.loginPage)
router.post("/search",is_Blocked,customerControler.search)
router.get("/success", customerControler.googleAuthSuccess)
router.get("/auth/google", customerControler.googleAuth)
router.get("/google/callback",  customerControler.googleCallback)
router.get("/logout",  customerControler.userLogout)

module.exports=router
