import Express  from "express";
console.log("Inside Router");
import { createUser, readUser,updateShow } from "../controllers/user.js";
const router = Express.Router();
router.get('/',readUser);
router.post('/',createUser);
router.post('/updateShow',updateShow);
export default router;