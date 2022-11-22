import express from "express";
import { mongoConnect } from "./db/mongo.connection";
import booksRoutes from "./books/routes/book.routes";

mongoConnect();
const app = express();
const port = 3000;

app.use(express.json());
app.use("/books", booksRoutes);
app.listen(port, () => console.log('Server is running on port ' + port))

