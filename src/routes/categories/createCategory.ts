import express, { Request, Response } from 'express';
import Category from '../../entities/Category';
import { v4 as uuidV4 } from 'uuid';
import Post from '../../entities/Post';
// import { json } from 'process';
const router = express.Router();

interface CategoryInput {
    // postId: string;
    title: string;
    // summary: string;
    content: string;
}

router.post('/', async (req: Request, res: Response)=> {
    try{
        const { title, content } = req.body as CategoryInput;

        // validation näide
        if(!title || !content){
            return res.json({ error: 'all fields must be filled'});
        }
        // TODO: valideeri sijsonid (sanitize ja validate)
    
        // const post = await Post.findOne({ id: postId });
        // console.log(postId);
        // if(!post){
        //     return res.json({ message:"No such post found" });
        // }
    
        const category = Category.create({
            id: uuidV4(),
            // authorId: authorId,
            title: title,
            metaTitle: title.replace(/\s/g, '-'),
            // metaTitle: title.split(/(\s+)/).join('-'),
            // summary: summary,
            content: content,
            // published: false
        });
    
        console.log(category);
        const newCategory = await category.save();
        if(!newCategory) {
            // TODO: parem logger vahevara kasutusele võtta
            console.log({error: "unable to save category"});
            // TODO: error handling vahevara luua (ühtlustada errori kuvamine)
            return res.json({
                error: 'Unable to create new category',
                message: 'typeorm save'
            });
        }
    
        return res.json(newCategory);
    }catch(error){
        console.log('Unknown database error');
        if(error instanceof Error){
            return res.json({
                error: 'Unable to create new category',
                message: error.message
            });
        }
        return res.json({
            error: 'Unable to create new category',
            message: 'Unknown error'
        });
}

});

export default router;