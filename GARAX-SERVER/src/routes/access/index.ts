import express from 'express';

export const routerAccess = express.Router();
// import authController from '../../controllers/access.controller';
// import authenticateToken from '../../middlewares/auth';
// import authorizeRole from '../../middlewares/authorize.middleware';
// import refreshToken from "../../middlewares/refreshToken";

//đăng ký router register
// router.post('/register', authController.register);
//đăng ký router verify
// router.post('/verify',authController.verify)
//đăng ký router refresh token
// router.get('/user', authenticateToken , authorizeRole(['user','Admin']), (req: Request, res: Response) => {
//   res.send(`User ID: ${req.IDAcc} ${req.role} `);
// });
// router.post('/refreshToken',refreshToken);

//đăng ký router login
// router.post('/login', authController.login);

//dăng ký router role admin
// router.get('/admin', authenticateToken, authorizeRole(['Admin']), (_req: Request, res: Response) => {
//     res.status(200).json({ message: 'Welcome Admin' });
//   });

// router.get('/users',authController.getCustomerDetails);
