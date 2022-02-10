import express, { Request, Response } from 'express';
import User from '../../entities/User';
import bunyan from 'bunyan';
const logger = bunyan.createLogger({ name: __filename });

const router = express.Router();

interface UserDeleteInput {
    userId: string;
  }

router.delete('/', async (req,res)=> {
    try{
        const { userId } = req.body as UserDeleteInput
        const user = await User.findOne({ where: { id: userId } });

        if(!user){
            return res.json({
                error: 'Unable to find user',
                message: 'No user with given id found'
              });
        }
        const deletedUser = await user.softRemove();
        logger.info({ user: deletedUser }, 'User was deleted');

        return res.json(deletedUser);
    }catch(error){
        if (error instanceof Error) {
            return res.json({
              error: 'Unable to find user',
              message: error.message
            });
          }
          // unknown (typeorm error?)
          return res.json({
            error: 'Unable to create new user',
            message: 'unknown error'
          });
    }
});

export default router;