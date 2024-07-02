import { Router } from "express";
import { feedback } from "../controller/feedback.js";
import {registerUser,login} from "../controller/user.controller.js"

const router = Router()


router.route('/feedback').post(feedback)
router.route('/register').post(registerUser)
router.route('/login').post(login)

export default router