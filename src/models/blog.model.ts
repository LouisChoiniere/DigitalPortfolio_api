import mongoose, { Schema, Document } from 'mongoose'

export interface IBlog extends Document {
    title: string;
    content: string;
    date: Date;
}

const blogSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    collection: 'blog',
    versionKey: false
})

export default mongoose.model<IBlog>('Blog', blogSchema)