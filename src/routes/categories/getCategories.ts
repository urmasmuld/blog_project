import express, { Request, Response } from 'express';
import Category from '../../entities/Category';
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
        
        const categoriesQuery = Category.createQueryBuilder('category')
        // .innerJoinAndSelect('category.author','author')
        .limit(Number.isSafeInteger(take) ? Number.parseInt(skip as string): 20)
        .offset(Number.isSafeInteger(skip) ? Number.parseInt(skip as string): 0);

        // if(postId != undefined) {
        //   postsQuery.where('author.id = :postId', { userId: userId });
        // }
        const categories = await categoriesQuery.getMany();

        return res.json(({categories: categories}));

    }catch(error) {
        if (error instanceof Error) {
            return res.json({
              error: 'Unable to find categories',
              message: error.message
            });
          }
          // unknown (typeorm error?)
          return res.json({
            error: 'Unable to find categories',
            message: 'unknown error'
          });
    }
});

export default router;