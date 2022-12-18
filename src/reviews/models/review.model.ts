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
    unique: true,
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
    min: 1,
    max: 5,
    required: true,
  },
});

export type Review = InferSchemaType<typeof reviewSchema>;


export const ReviewModel: Model<Review> = model("Review", reviewSchema);
