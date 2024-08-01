import { Request,Response } from "express";
import Product from "../models/Product";

class Product_Controller {
    static async create_product(req:Request,res:Response){
        try {
            const product = await Product.build({name:req.body.name,cost:req.body.cost,price:req.body.price,buyer:req.body.buyer,status:req.body.status,})
            product.save()
            return res.status(200).json({msg:product})

        } catch (error) {
            console.log(error)
            res.status(500).send({ error: 'Erro ao criar Peça' });
        }
    }
}
export default Product_Controller