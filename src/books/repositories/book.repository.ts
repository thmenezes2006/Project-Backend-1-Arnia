import { Book } from "../models/book.model";
import { Model } from "mongoose";

export class BookRepository {
  constructor(private readonly bookModel: Model<Book>) {}

  async getAll(): Promise<Book[]> {
    const books = await this.bookModel.find();

    return books;
  }

  async getAllByAuthor(autor: string): Promise<Book[]> {
    const books = await this.bookModel.find({autor: autor});

    return books;
  }

  async getById(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id).populate('Resenha');

    if (book === null) {
      return {} as Book;
    }

    return book;
  }

  async create(book: Book): Promise<Book> {
    const newBook = this.bookModel.create(book);
    return newBook;
  }

  async update(id: string, book: Book): Promise<Book> {
    const {idioma, resenha} = book
    const updatedBook = await this.bookModel.findByIdAndUpdate(id, {
      $set: {idioma: idioma},
      $push: {resenha: resenha}
    }, {
      new: true,
    });

    if (updatedBook === null) {
      return {} as Book;
    }

    return updatedBook;
  }

  async updateStatus(id: string, book: Book): Promise<Book> {
    const {status} = book
    const updatedBook = await this.bookModel.findByIdAndUpdate(id, {
      $set: {status: status}
    }, {
      new: true,
    });

    if (updatedBook === null) {
      return {} as Book;
    }

    return updatedBook;
  }

}
