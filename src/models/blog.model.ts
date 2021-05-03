import mongoose, { Schema, Document } from 'mongoose'

export interface IBlog extends Document {
    title: string;
    content: string;
    date: string;
}

const blogSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, required: true },
}, {
    collection: 'blog',
    versionKey: false
})

export default mongoose.model<IBlog>('Blog', blogSchema)