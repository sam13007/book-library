import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true}
})

export interface IBook extends mongoose.Document{
    title:string,
    author:string
}

export default mongoose.model<IBook>("Book",bookSchema)