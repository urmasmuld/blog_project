import express, { Request, Response } from 'express';
import Post from '../../entities/Post';
import bunyan from 'bunyan';
const logger = bunyan.createLogger({ name: __filename });

const router = express.Router();

interface PostDeleteInput {
    postId: string;
  }

router.delete('/', async (req,res)=> {
    try{
        const { postId } = req.body as PostDeleteInput
        const post = await Post.findOne({ where: { id: postId } });

        if(!post){
            return res.json({
                error: 'Unable to find post',
                message: 'No post with given id found'
              });
        }
        const deletedPost = await post.softRemove();
        logger.info({ post: deletedPost }, 'Post was deleted');

        return res.json(deletedPost);
    }catch(error){
        if (error instanceof Error) {
            return res.json({
              error: 'Unable to find post',
              message: error.message
            });
          }
          // unknown (typeorm error?)
          return res.json({
            error: 'Unable to create new post',
            message: 'unknown error'
          });
    }
});

export default router;