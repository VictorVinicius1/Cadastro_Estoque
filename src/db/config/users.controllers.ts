import { Request,Response } from "express";
import User from "../models/User";
import md5 from "md5";
import Jwt from "jsonwebtoken";
import { verifytoken,sign } from "../../jwt/jwt";
class User_Controller {


    static async get_users(req:Request,res:Response){
    const users = await User.findAll()
    return res.status(500).json(users)
    }
    
    static async create_user(req:Request,res:Response){

        try{
             const hashaedpassword = await md5(req.body.password)  
        //     const token = req.headers.authorization
        //     const usuarioLogado = Jwt.verify( token, 'cd0677f87096a0cd1244a5922211148b071657037e2392a0b87df6d14496fc9d' )
        //    console.log( usuarioLogado.user.id, usuarioLogado.user.name)
             const user = await User.build({username: req.body.username,name:req.body.name, password:md5(req.body.password)})
            user.save()
             return res.status(200).json({msg:user})
            // return res.status(200)
            // console.log(req.body.password)
            
        }
        catch(error){
            console.log(error)
            res.status(500).send({ error: 'Erro ao criar usuário' });

        }
    }
    static async login (req: Request, res: Response) {
         const {username, password} = req.body
         const hashPassword = md5(req.body.password)
        const user = await User.findOne({where:{
            username:req.body.username,
            password:hashPassword
        }})
        if(!user) return res.status(404).json({msg:'user not found'})

        const token = sign({username,password})
        return res.status(200).json(token)

        // try {

        //     const user = await User.findOne({where: {username: req.body.username, password: md5(password)}})
        //     if (user) {
        //         console.log(Jwt.sign({user},'cd0677f87096a0cd1244a5922211148b071657037e2392a0b87df6d14496fc9d', {
        //              algorithm:'HS256',
        //              expiresIn: '3h'
        //          }))
        //     }
        // } catch (error) {
        //     console.log(error)
        // }

        // return res.status(200).json({msg:'ok'})
         }

}
export default User_Controller