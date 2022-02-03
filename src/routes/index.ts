import express from 'express';
import fs from 'fs';
import createUser from './user/createUser';
import getUser from './user/getUser';
import getUsers from './user/getUsers';
import createPost from './posts/createPost';
import getPost from './posts/getPost';
import getPosts from './posts/getPosts';
const router = express.Router();
// var userRoutes: string[] = [];


// console.log(userRoutes.toString());

router.use('/users', [createUser, getUser, getUsers]);
router.use('/posts', [createPost, getPost, getPosts]);

export default router;