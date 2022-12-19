import { Schema, model, Model, InferSchemaType } from "mongoose";

const reviewSchema = new Schema({
  tituloResenha: {
    type: String,
    required: true,
    maxlength: 24,
    unique: true
  },
  resenha: {
    type: [String],
    required: true,
    maxlength: 200,
  },
  dataEdicao: {
    type: [Date],
    required: true,
  },
  notaObra: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
},
{
  timestamps:{
    createdAt: true,
    updatedAt: false
  }
},
);

export type Review = InferSchemaType<typeof reviewSchema>;


export const ReviewModel: Model<Review> = model("Review", reviewSchema);
