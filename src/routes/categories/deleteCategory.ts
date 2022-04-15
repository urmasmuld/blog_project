import express, { Request, Response } from 'express';
import Category from '../../entities/Category';
import bunyan from 'bunyan';
const logger = bunyan.createLogger({ name: __filename });

const router = express.Router();

interface CategoryDeleteInput {
    categoryId: string;
  }

router.delete('/', async (req,res)=> {
    try{
        const { categoryId } = req.body as CategoryDeleteInput
        const category = await Category.findOne({ where: { id: categoryId } });

        if(!category){
            return res.json({
                error: 'Unable to find category for deletion',
                message: 'No category with given id found'
              });
        }
        const deletedCategory = await category.softRemove();
        logger.info({ category: deletedCategory }, 'Category was deleted');

        return res.json(deletedCategory);
    }catch(error){
        if (error instanceof Error) {
            return res.json({
              error: 'Unable to find category for deletion',
              message: error.message
            });
          }
          // unknown (typeorm error?)
          return res.json({
            error: 'Unable to create new category',
            message: 'unknown error'
          });
    }
});

export default router;