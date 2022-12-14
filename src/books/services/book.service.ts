import { Book } from "../models/book.model";
import { BookRepository } from "../repositories/book.repository";
import {
  CustomErrors,
  invalidIdError,
  promiseError,
} from "../../utils/error.handler";
import { isIdValid } from "../../utils/id.validator";

export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getAll(): Promise<Book[] | CustomErrors> {
    try {
      const books = await this.bookRepository.getAll();
      return books;
    } catch (error) {
      return promiseError(error);
    }
  }

  async getAllByAuthor(autor: string): Promise<Book[] | CustomErrors> {
    try {
      const books = await this.bookRepository.getAllByAuthor(autor);
      return books;
    } catch (error) {
      return promiseError(error);
    }
  }

  async getById(id: string): Promise<Book | CustomErrors> {
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const book = await this.bookRepository.getById(id);
      return book;
    } catch (error) {
      return promiseError(error);
    }
  }

  async create(book: Book): Promise<Book | CustomErrors> {
    try {
      const newBook = await this.bookRepository.create(book);
      return newBook;
    } catch (error) {
      return promiseError(error);
    }
  }

  async update(id: string, book: Book): Promise<Book | CustomErrors> {
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const updatedBook = await this.bookRepository.update(id, book);
      return updatedBook;
    } catch (error) {
      return promiseError(error);
    }
  }

  async updateStatus(id: string, book: Book): Promise<Book | CustomErrors> {
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const updatedBook = await this.bookRepository.updateStatus(id, book);
      return updatedBook;
    } catch (error) {
      return promiseError(error);
    }
  }
}
