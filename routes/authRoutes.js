const router=require('express').Router()

const {registerController,loginController,currentUserController}=require("../controllers/authController")
const authMiddelware = require("../middlewares/authMiddelware");





http://localhost:8080/api/v1/auth/register
router.post('/register',registerController)

http://localhost:8080/api/v1/auth/login
router.post('/login',loginController)

http://localhost:8080/api/v1/auth/current-user
router.get('/current-user',authMiddelware,currentUserController)

module.exports=router;