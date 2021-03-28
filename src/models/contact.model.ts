import mongoose, { Document, Schema } from "mongoose";

export interface IContact extends Document {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const contactSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
}, {
    collection: 'contact',
    versionKey: false
})

export default mongoose.model<IContact>('Contact', contactSchema)