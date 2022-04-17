import express, { Request, Response } from 'express';
import Tag from '../../entities/Tag';
import { v4 as uuidV4 } from 'uuid';
const router = express.Router();

interface TagInput {
  title: string;
  metaTitle: string;
  slug: string;
  content: string;
}

router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, slug, content } = req.body as TagInput;
    //console.log('request', req.body);

    // validation näide
    if (!title || !slug || !content) {
      //if (!authorId) {
      return res.json({ error: 'all fields must be filled' });
    }
    // TODO: valideeri jsonid (nt. sanitize ja validate)

    const titleCheck = await Tag.findOne({ title: title });
    if (titleCheck) {
      return res.json({
        message: 'There is a tag with this title already: ' + titleCheck.title
      });
    }

    const tag = Tag.create({
      id: uuidV4(),
      title: title,
      metaTitle: title.replace(/\s/g, '-'),
      slug: slug,
      content: content
    });
    //console.log(tag);
    const newTag = await tag.save();
    if (!newTag) {
      console.log({ error: 'unable to save tag' });
      return res.json({
        error: 'Unable to create new tag',
        message: 'typeorm save'
      });
    }

    return res.json(newTag);
  } catch (error) {
    console.log('Unknown databse error');
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to create new tag',
        message: error.message
      });
    }
    return res.json({
      error: 'Unable to create new tag',
      message: 'Unknown error'
    });
  }
});

export default router;