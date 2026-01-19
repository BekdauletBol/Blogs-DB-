// Вот тут у меня Схема данных
import { Schema, model, type Document } from "mongoose";

export interface Blog extends Document{
    title: string;
    author: string;
    content: string;
}

const blogSchema = new Schema<Blog>({
    title: {type: String, required: [true, "Title is required"]},
    author: {type: String, required: [true, "Author is required"]},
    content: {type: String, default: 'Anonymous'},
},{
    timestamps: true
});

export const Blog = model<Blog>('Blog', blogSchema);