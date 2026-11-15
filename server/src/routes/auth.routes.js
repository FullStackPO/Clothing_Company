import { Router } from "express"
import { registerValidation } from "../validator/auth.validator.js"
import { registerUserController } from "../controllers/auth.controller.js"

const router = Router()

router.post("/register", registerValidation, registerUserController)

export default router