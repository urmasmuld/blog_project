// import { randomUUID } from 'crypto';
import { v4 as uuidV4 } from 'uuid';
import express, { Request, Response } from 'express';
// import { getConnection } from 'typeorm';
import User from '../../entities/User';
const router = express.Router();
import bunyan from 'bunyan';
const log = bunyan.createLogger({
  name: __filename,
  stream: process.stdout
});

interface UserInput {
  firstName: string;
  middleName?: string;
  lastName: string;
  mobile: string;
  email: string;
}

router.post('/', async (req: Request, res: Response) => {
  try {
    let {
      firstName,
      middleName,
      lastName,
      mobile,
      email
    } = req.body as UserInput;

    // TODO: validation for inputs
    
    const user = new User();
    user.id = uuidV4();
    // user.id = randomUUID();
    user.firstName = firstName;
    user.middleName = middleName = !null ? middleName : '';
    user.lastName = lastName;
    user.mobile = mobile;
    user.email = email;

    let newUser = await user.save();
    if (!newUser) {
      throw new Error();
    }

    log.info({ user: newUser }, 'New user was created');
    return res.json(newUser);
  } catch (error) {
    log.error({ error: error, input: req.body }, 'Unable to create User');
    if (error instanceof Error) {
      // console.log({ error: error.message });
      return res.json({
        error: 'Unable to create new user',
        message: error.message
      });
    }

    return res.json({
      error: 'Unable to create new user',
      message: 'unknown error'
    });
  }
});

export default router;