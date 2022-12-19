import { fakeBookData, updatedBook, fakeId } from "../__mocks__/fake.book.data";
import { fakeBookModel } from "../__mocks__/fake.book.model"
import { BookRepository } from "./book.repository";
import { jest } from "@jest/globals"

const bookRepository = new BookRepository(fakeBookModel)


describe("BookRepository", () => {
    describe("create", () => {
        it("Deve criar um livro", async () => {
            const newBook = await bookRepository.create(fakeBookData[0])
            expect(newBook).toEqual(fakeBookData[0])
        })
    })

    describe("getAll", () => {
        it("Deve retornar uma lista de livros", async () => {
            const books = await bookRepository.getAll();
            expect(books).toEqual(fakeBookData)
        })
         it("Deve retornar uma lista de livros por autor", async () => {
            const books = await bookRepository.getAllByAuthor(fakeBookData[0].autor);
            expect(books).toEqual(fakeBookData)
        })
        it("Deve retornar um array vazio", async () => {
            jest.spyOn(fakeBookModel, "find").mockResolvedValueOnce([])
            const books = await bookRepository.getAll()
            expect(books).toEqual([])
        })
    })

    describe("getAllByAuthor", () => {
       
        it("Deve retornar um array vazio", async () => {
            jest.spyOn(fakeBookModel, "find").mockResolvedValueOnce([])
            const books = await bookRepository.getAllByAuthor("")
            expect(books).toEqual([])
        })
    })
    
    describe("getById", () => {
        it("Deve retornar um livro", async () => {
            jest.spyOn(fakeBookModel, "findById").mockImplementationOnce(
                () => ({
                    populate: jest.fn().mockImplementationOnce(() => fakeBookData[0])
                }) as any
            )
            const book =  await bookRepository.getById(fakeId)
            expect(book).toEqual(fakeBookData[0])
        })
        it("Deve retornar um objeto vazio", async () => {
            jest.spyOn(fakeBookModel, "findById").mockImplementationOnce(
                () => ({
                populate: jest.fn().mockImplementationOnce(() => null)
            }) as any
            )
            const book = await bookRepository.getById(fakeId)
            expect(book).toEqual({})
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

    describe("updateStatus", () => {
        it("Deve atualizar o status de um livro", async () => {
            const book = await bookRepository.updateStatus(fakeId, fakeBookData[0])
            expect(book).toEqual(updatedBook)
        })
        it("deve retornar um objeto vazio", async () => {
            jest.spyOn(fakeBookModel, "findByIdAndUpdate").mockResolvedValueOnce(null)

            const book = await bookRepository.updateStatus(fakeId, fakeBookData[0])
            expect(book).toEqual({})
        })
    })
})