import mongoose from "mongoose";
const collection = 'alumnosCollections';

const alumnosSchema= new mongoose.Schema({
    nombre: {type:String,require:true,max:100},
    apellido:{type:String,require:true,max:100},
    edad:{type:Number,require:true,max:100},
    dni:{type:String,require:true,max:100},
    curso:{type:String,require:true,max:100},
    nota:{type:Number,require:true,max:100}
})

export const alumnosCollections = mongoose.model(collection,alumnosSchema);