import express, { Request, Response } from 'express';
import Comment from '../../entities/Comment';
import bunyan from 'bunyan';
const logger = bunyan.createLogger({ name: __filename });

const router = express.Router();

interface CommentDeleteInput {
    commentId: string;
  }

router.delete('/', async (req,res)=> {
    try{
        const { commentId } = req.body as CommentDeleteInput
        const comment = await Comment.findOne({ where: { id: commentId } });

        if(!comment){
            return res.json({
                error: 'Unable to find comment',
                message: 'No comment with given id found'
              });
        }
        const deletedComment = await comment.softRemove();
        logger.info({ comment: deletedComment }, 'Comment was deleted');

        return res.json(deletedComment);
    }catch(error){
        if (error instanceof Error) {
            return res.json({
              error: 'Unable to find comment',
              message: error.message
            });
          }
          // unknown (typeorm error?)
          return res.json({
            error: 'Unable to create new comment',
            message: 'unknown error'
          });
    }
});

export default router;