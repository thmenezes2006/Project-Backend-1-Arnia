import { Schema, model, Model, InferSchemaType } from "mongoose";

const bookSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    maxlength: 24,
  },
  dataLancamento: {
    type: String,
    required: true,
  },
  idioma: {
    type: [String],
    required: true,
    maxlength: 18,
  },
  status: {
    type: Boolean,
    required: true,
  },
  resenha: {
    type: Schema.Types.ObjectId,
    ref: 'Review'
  },
  autor: {
    type: String,
    required: true,
    maxlength: 24,
    unique: true,
  },
},
{
  timestamps:true,
},
);

//tipamos a Schema com o InferSchemaType, nativo da mongoose
export type Book = InferSchemaType<typeof bookSchema>;

//tipamos o model com o Pet(custom type criado acima) e inicializamos
//criamos um objeto com os métodos do model(mongoose)

export const BookModel: Model<Book> = model("Book", bookSchema);
