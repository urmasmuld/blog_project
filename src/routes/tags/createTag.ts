import express, { Request, Response } from 'express';
import Tag from '../../entities/Tag';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try{
        const { skip, take } = req.query;

        // const posts = await Post.find({
        //     take: Number.isSafeInteger(take) ? Number.parseInt(skip as string): 20,
        //     skip: Number.isSafeInteger(skip) ? Number.parseInt(skip as string): 0,
        //     order: {
        //         createdAt: 'DESC'
        //     }
        // });
        // console.log(...posts);
        
        const tagsQuery = Tag.createQueryBuilder('tag')
        // .innerJoinAndSelect('category.author','author')
        .limit(Number.isSafeInteger(take) ? Number.parseInt(skip as string): 20)
        .offset(Number.isSafeInteger(skip) ? Number.parseInt(skip as string): 0);

        // if(postId != undefined) {
        //   postsQuery.where('author.id = :postId', { userId: userId });
        // }
        const tags = await tagsQuery.getMany();

        return res.json(({tags: tags}));

    }catch(error) {
        if (error instanceof Error) {
            return res.json({
              error: 'Unable to find tags',
              message: error.message
            });
          }
          // unknown (typeorm error?)
          return res.json({
            error: 'Unable to find tags',
            message: 'unknown error'
          });
    }
});

export default router;