import Express  from "express";
console.log("Inside Router");
import { updateShow, register,login,deleteshows,filterShow } from "../controllers/user.js";
const router = Express.Router();
router.post('/register',register);
router.post('/login',login);
router.post('/updateShow',updateShow);
router.post('/deleteshows',deleteshows);
router.post('/filter',filterShow)
export default router;