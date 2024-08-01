import jwt,{ SignOptions } from "jsonwebtoken";
import { NextFunction,Request,Response } from "express";

const secret = "6785f4c280ec9d667f5bf38c4d9922acbd9f5f90cd6f9f1ae3c3f970737e4b06"

const sign = (payload:{userId:String, username:number},expiresIn = '3h') =>{
    const jwtconfig:SignOptions = {
        algorithm:'HS256',
        expiresIn
    }
    return jwt.sign(payload,secret,jwtconfig)
}
const verifytoken = (req:Request,res:Response,next:NextFunction)=>{
    try {
        const token = req.header('Authorization')
        if(!token) return res.status(401).json({msg:'Não Autorizado'})
        const decoded = jwt.verify(token,secret)
        res.locals.userId = decoded.userId;
        next();
        
    } catch (error) {
        next(res.status(403).json({ error: 'Token inválido' }))
        
    }
}
export{sign,verifytoken}