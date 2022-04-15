import express from 'express';
import fs from 'fs';
import createUser from './users/createUser';
import getUser from './users/getUser';
import getUsers from './users/getUsers';
import deleteUser from './users/deleteUser';
import getPost from './posts/getPost';
import getPosts from './posts/getPosts';
import deletePost from './posts/deletePost';
import createPost from './posts/createPost';
import createComment from './comments/createComment';
import getComments from './comments/getComments';
import getComment from './comments/getComment';
import deleteComment from './comments/deleteComment';
import createCategory from './categories/createCategory';
import getCategories from './categories/getCategories';
import getCategory from './categories/getCategory';
import deleteCategory from './categories/deleteCategory';
import createTag from './tags/createTag';
import getTags from './tags/getTags';
import getTag from './tags/getTag';
import deleteTag from './tags/deleteTag';

const router = express.Router();
// var userRoutes: string[] = [];

// fs.readdirSync(__dirname + '/user').forEach(function (file) {
//   router.use('/users', async () => {
//     return await import(__dirname.concat('\\user\\').concat(file));
//   });
// });
// console.log(userRoutes.toString());

router.use('/users', [createUser, getUser, getUsers, deleteUser]);
router.use('/posts', [createPost, getPost, getPosts, deletePost]);
router.use('/comments', [createComment, getComment, getComments, deleteComment]);
router.use('/categories', [createCategory, getCategory, getCategories, deleteCategory]);
router.use('/tags', [createTag, getTag, getTags, deleteTag]);

export default router;