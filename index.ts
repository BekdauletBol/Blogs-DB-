import * as dotenv from 'dotenv';
import express, {type Request, type Response, type NextFunction} from 'express';
import mongoose from 'mongoose'
import cors from 'cors'
import { Blog } from './models/blog.js'


const app = express()
const port = process.env.PORT || 3000;
const DB = 'mongodb+srv://bolatovbekdaulet4_db_user:qweasdzxc890@cluster0.weesyjj.mongodb.net/?appName=Cluster0'

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.static('public'))


mongoose.connect(DB)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

// Create blog
app.post('/blogs', async (req:Request, res: Response)=>{
    try{
        const blog = new Blog(req.body);
        const savedBlog = await blog.save()
        res.status(201).json(savedBlog)
    }catch(err: any){
        res.status(400).json(err.message)
    }
})

// Get our all of post

app.get('/blogs', async (req: Request, res: Response)=>{
    try{
        const blogs = await Blog.find().sort({ createdAt: -1})
        res.json(blogs)
    }catch(err:any){
        res.status(500).json({message:'Database issue'})
    }
})

// Get our post by id
app.get('/blogs/:id', async (req: Request, res: Response)=>{
    try{
        const blog = await Blog.findById(req.params.id)
        if (!blog) res.status(404).json({message: 'Blog not found'})
        res.json(blog)
    }catch(err: any){
        res.status(500).json({message: 'Invalid id =('})
    }
})

// Put our post

app.put('/blogs/:id', async (req: Request, res: Response)=>{
    try{
        const updateBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            {mew:true, runValidators:true}
        )
        if (!updateBlog) res.status(404).json({message: 'Blog not found'})
        res.json(updateBlog)
    }catch(err: any){
        res.status(500).json({message: err.message})
    }
})

// Delete our post

app.delete('/blogs/:id', async(req: Request, res: Response)=>{
    try{
        const deleteBlog = await Blog.findByIdAndDelete(req.params.id)
        if (!deleteBlog) res.status(404).json({message: 'Blog not found'})
        res.json(deleteBlog)
    }catch(err:any){
        res.status(404).json({message: 'Blog not found Invalid id'})
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`))
