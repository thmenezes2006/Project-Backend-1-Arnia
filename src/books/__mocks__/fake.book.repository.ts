import { fakeBookData, updatedBook } from "./fake.book.data";
import { BookRepository } from "../repositories/book.repository";

export const fakeBookRepository = {
    getAll: () => Promise.resolve(fakeBookData),
    getById: () => Promise.resolve(fakeBookData[0]),
    create: () => Promise.resolve(fakeBookData[1]),
    update: () => Promise.resolve(fakeBookData),
} as unknown as BookRepository;