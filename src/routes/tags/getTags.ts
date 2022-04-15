import express, { Request, Response } from 'express';
import Tag from '../../entities/Tag';
import { v4 as uuidV4 } from 'uuid';
// import { json } from 'process';
const router = express.Router();

interface TagInput {
    id: string;
    title: string;
    metaTitle: string;
    content: string;
}

router.post('/', async (req: Request, res: Response)=> {
    try{
        const { id, title, metaTitle, content } = req.body as TagInput;

        // validation näide
        if(!id || !title || !metaTitle || !content){
            return res.json({ error: 'all fields must be filled'});
        }
        // TODO: valideeri sijsonid (sanitize ja validate)
    
        // const post = await Post.findOne({ id: postId });
        // console.log(postId);
        // if(!post){
        //     return res.json({ message:"No such post found" });
        // }
    
        const tag = Tag.create({
            id: uuidV4(),
            // authorId: authorId,
            title: title,
            metaTitle: title.replace(/\s/g, '-'),
            // metaTitle: title.split(/(\s+)/).join('-'),
            // summary: summary,
            content: content,
            // published: false
        });
    
        console.log(tag);
        const newTag = await tag.save();
        if(!newTag) {
            // TODO: parem logger vahevara kasutusele võtta
            console.log({error: "unable to save tag"});
            // TODO: error handling vahevara luua (ühtlustada errori kuvamine)
            return res.json({
                error: 'Unable to create new tag',
                message: 'typeorm save'
            });
        }
    
        return res.json(newTag);
    }catch(error){
        console.log('Unknown database error');
        if(error instanceof Error){
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