import express, { Request, Response } from 'express';
import Tag from '../../entities/Tag';
import bunyan from 'bunyan';
const logger = bunyan.createLogger({ name: __filename });

const router = express.Router();

interface TagDeleteInput {
    tagId: string;
  }

router.delete('/', async (req,res)=> {
    try{
        const { tagId } = req.body as TagDeleteInput
        const tag = await Tag.findOne({ where: { id: tagId } });

        if(!tag){
            return res.json({
                error: 'Unable to find tag',
                message: 'No tag with given id found'
              });
        }
        const deletedTag = await tag.softRemove();
        logger.info({ tag: deletedTag }, 'Tag was deleted');

        return res.json(deletedTag);
    }catch(error){
        if (error instanceof Error) {
            return res.json({
              error: 'Unable to find tag',
              message: error.message
            });
          }
          // unknown (typeorm error?)
          return res.json({
            error: 'Unable to create new tag',
            message: 'unknown error'
          });
    }
});

export default router;