import { fakeBookData, updatedBook, fakeId } from "../__mocks__/fake.book.data";
import { fakeBookModel } from "../__mocks__/fake.book.model"
import { BookRepository } from "./book.repository";
import { jest } from "@jest/globals"
import exp from "constants";

const bookRepository = new BookRepository(fakeBookModel)

describe("BookRepository", () => {
    describe("getAll", () => {
        it("Deve retornar uma lista de livros", async () => {
            const books = await bookRepository.getAll();
            expect(books).toEqual(fakeBookData)
        })
        it("Deve retornar um array vazio", async () => {
            jest.spyOn(fakeBookModel, "find").mockResolvedValueOnce([])
            const books = await bookRepository.getAll()
            expect(books).toEqual([])
        })
    })

    describe("getById", () => {
        it("deve retornar um livro", async () => {
            const book = await bookRepository.getById(fakeId)
            expect(book).toEqual(fakeBookData[0])
        })
        it("Deve retornar um objeto vazio", async () => {
            jest.spyOn(fakeBookModel, "findById").mockResolvedValueOnce(null)
            const book = await bookRepository.getById(fakeId)
            expect(book).toEqual({})
        })
    })

    describe("create", () => {
        it("Deve criar um livro", async () => {
            const newBook = await bookRepository.create(fakeBookData[0])
            expect(newBook).toEqual(fakeBookData[0])
        })
    })
    
    describe("update", () => {
        it("Deve atualizar um livro", async () => {
            const book = await bookRepository.update(fakeId, fakeBookData[0])
            expect(book).toEqual(updatedBook)
        })
        it("deve retornar um objeto vazio", async () => {
            jest.spyOn(fakeBookModel, "findByIdAndUpdate").mockResolvedValueOnce(null)

            const book = await bookRepository.update(fakeId, fakeBookData[0])
            expect(book).toEqual({})
        })
    })
})