import express, { Request, Response } from 'express';
import Post from '../../entities/Post';
import Comment from '../../entities/Comment';
import { v4 as uuidV4 } from 'uuid';
import User from '../../entities/User';
// import { json } from 'process';
const router = express.Router();

interface CommentInput {
    postId: string;
    title: string;
    // summary: string;
    content: string;
}

router.post('/', async (req: Request, res: Response)=> {
    try{
        const { postId, title, content } = req.body as CommentInput;

        // validation näide
        if(!postId || !title || !content){
            return res.json({ error: 'all fields must be filled'});
        }
        // TODO: valideeri sijsonid (sanitize ja validate)
    
        const post = await Post.findOne({ id: postId });
        console.log(postId);
        if(!post){
            return res.json({ message:"No such post found" });
        }
    
        const comment = Comment.create({
            id: uuidV4(),
            postId: postId,
            title: title,
            // metaTitle: title.replace(/\s/g, '-'),
            // metaTitle: title.split(/(\s+)/).join('-'),
            // summary: summary,
            content: content,
            published: false
        });
    
        console.log(comment);
        const newComment = await comment.save();
        if(!newComment) {
            // TODO: parem logger vahevara kasutusele võtta
            console.log({error: "unable to save comment"});
            // TODO: error handling vahevara luua (ühtlustada errori kuvamine)
            return res.json({
                error: 'Unable to create new comment',
                message: 'typeorm save'
            });
        }
    
        return res.json(newComment);
    }catch(error){
        console.log('Unknown database error');
        if(error instanceof Error){
            return res.json({
                error: 'Unable to create new comment',
                message: error.message
            });
        }
        return res.json({
            error: 'Unable to create new comment',
            message: 'Unknown error'
        });
}

});

export default router;