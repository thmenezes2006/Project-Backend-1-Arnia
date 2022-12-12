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
  dataCriacao: {
    type: Date,
    required: true,
    maxlength: 18,
  },
  dataEdicao: {
    type: Date,
    required: true,
  },
  notaObra: {
    type: Number,
    required: true,
  },
});

export type Review = InferSchemaType<typeof reviewSchema>;


export const ReviewModel: Model<Review> = model("Review", reviewSchema);