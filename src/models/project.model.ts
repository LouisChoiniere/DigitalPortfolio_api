import mongoose, { Schema, Document } from 'mongoose'

export interface IProject extends Document {
    title: string;
    description: string;
    links: Array<Object>;
    date: string;
    displayOrder: number;
}

const projectSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    links: { type: Array, required: false },
    date: { type: String, required: true },
    displayOrder: { type: Number, required: true },
}, {
    collection: 'project'
});

export default mongoose.model<IProject>('Project', projectSchema);