import express, { Request, Response } from 'express';
import Comment from '../../entities/Comment';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try{
        const { postId, skip, take } = req.query;

        // const posts = await Post.find({
        //     take: Number.isSafeInteger(take) ? Number.parseInt(skip as string): 20,
        //     skip: Number.isSafeInteger(skip) ? Number.parseInt(skip as string): 0,
        //     order: {
        //         createdAt: 'DESC'
        //     }
        // });
        // console.log(...posts);
        
        const commentsQuery = Comment.createQueryBuilder('comment')
        .innerJoinAndSelect('comment.post','post')
        .limit(Number.isSafeInteger(take) ? Number.parseInt(skip as string): 20)
        .offset(Number.isSafeInteger(skip) ? Number.parseInt(skip as string): 0);

        if(postId != undefined) {
            commentsQuery.where('post.id = :postId', { postId: postId });
        }
        const comments = await commentsQuery.getMany();

        return res.json(({comments: comments}));

    }catch(error) {
        if (error instanceof Error) {
            return res.json({
              error: 'Unable to find comments',
              message: error.message
            });
          }
          // unknown (typeorm error?)
          return res.json({
            error: 'Unable to find comments',
            message: 'unknown error'
          });
    }
});

export default router;