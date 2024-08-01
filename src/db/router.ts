import Express,{ Router } from "express";
import User_Controller from "./config/users.controllers";
import Product_Controller from "./config/products.controllers";

const router = Express()
router.post('/createuser',(req,res)=>{User_Controller.create_user(req,res)})
router.post('/login',(req,res)=>{User_Controller.login(req,res)})
router.get('/getusers',(req,res)=>{User_Controller.get_users(req,res)})


router.post('/createproduct',(req,res)=>{Product_Controller.create_product(req,res)})
export default router