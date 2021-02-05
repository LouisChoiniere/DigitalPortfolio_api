import mongoose, { Schema, Document } from 'mongoose'

export interface IMe extends Document {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    about: string;
    links: Array<Object>;
}

const meSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    about: { type: String, required: true },
    links: { type: Array, required: true },
}, { collection: 'me' });

export default mongoose.model<IMe>('Me', meSchema);