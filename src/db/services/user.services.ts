import { Request, Response } from 'express';
import md5 from 'md5';
import jwt from 'jsonwebtoken';
import User from '../models/User';


// class UserService {
//     static async login(req: Request, res: Response) {
//         const { email, password } = req.body;
//         const hashPassword = md5(password);

//         try {
//             const user = await this.model.findOne({
//                 where: {
//                     email,
//                     password: hashPassword,
//                 },
//             });

//             if (!user) {
//                 return res.status(404).json({ message: 'User not found' });
//             }

//             const { id, email: userEmail } = user;
//             const token = jwt.sign({ id, email: userEmail }, JWT_SECRET);

//             return res.status(200).json({ token });
//         } catch (error) {
//             console.log(error);
//             return res.status(500).json({ message: 'Error logging in' });
//         }
//     }
// }

// export default ;