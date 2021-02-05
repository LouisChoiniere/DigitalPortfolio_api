import mongoose, { Schema, Document } from 'mongoose'

export interface IExperience extends Document {
    compagny: string;
    position: {
        name: string;
        description: string;
    };
    date: {
        start: string;
        end: string;
    };
    displayOrder: number;
}

const experienceSchema: Schema = new Schema({
    compagny: { type: String, required: true },
    position: {
        name: { type: String, required: true },
        description: { type: String, required: true },
    },
    date: {
        start: { type: String, required: true },
        end: { type: String, required: true },
    },
    displayOrder: { type: String, required: true },
}, { collection: 'experience'})

export default mongoose.model<IExperience>('Experience', experienceSchema)