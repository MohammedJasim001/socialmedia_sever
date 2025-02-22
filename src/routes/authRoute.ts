import express from "express";
import { login, register, verifyOtp } from "../controllers/user/authController";

const router = express.Router()

router.post('/register',register)
router.post('/otpverification',verifyOtp)
router.post('/login',login)


export default router