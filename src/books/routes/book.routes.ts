import express from "express";
import { book } from "../factories/book.factory";

const booksRoutes = express.Router();

//o bind é encarregado de manter o escopo do this
booksRoutes.get("/", book.getAll.bind(book));
booksRoutes.get("/:id", book.getById.bind(book));
booksRoutes.post("/", book.create.bind(book));
booksRoutes.put("/:id", book.update.bind(book));
booksRoutes.put("/:id/status", book.updateStatus.bind(book))


export default booksRoutes;
