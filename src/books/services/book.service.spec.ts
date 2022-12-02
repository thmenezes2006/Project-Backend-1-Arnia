import { fakeBookData, updatedBook, fakeId } from "./../__mocks__/fake.book.data";
import { fakeBookRepository } from "../__mocks__/fake.book.repository";
import { BookService } from "./book.service";
import { jest, describe, it, expect } from "@jest/globals";
import { invalidIdError } from "../../utils/error.handler";

const bookService = new BookService(fakeBookRepository)

describe("BookService", () => {
    describe("getAll", () => {
        it("Deve se conectar em Repository.getAll", async () => {
            const spy =jest.spyOn(fakeBookRepository, "getAll")
            await bookService.getAll()
            expect(spy).toHaveBeenCalled()
        })
        it("Deve retornar uma lista de livros", async () => {
            const books = await bookService.getAll()
            expect(books).toEqual(fakeBookData)
        })
        it("Deve retornar uma promessa de Erro", async () => {
            jest.spyOn(fakeBookRepository, "getAll").mockRejectedValueOnce("Error")
            const error = await bookService.getAll()

            expect(error).toEqual({
                promiseError: {
                    message: "Requisição do banco de dados não completada",
                    error: "Error",
                }
            })
        })
    })

    describe("getById", () => {
        it("Deve se conectar em Repository.getById", async () => {
            const spy = jest.spyOn(fakeBookRepository, "getById")
            await bookService.getById(fakeId)
            expect(spy).toHaveBeenCalled()
        })
        it("Deve retornar um livro", async () => {
            const book = await bookService.getById(fakeId)
            expect(book).toEqual(fakeBookData[0])
        })
        it("Deve retornar uma promessa de erro", async () => {
            jest.spyOn(fakeBookRepository, "getById").mockRejectedValueOnce("Error")
            const error = await bookService.getById(fakeId)
            expect(error).toEqual({
                promisseError: {
                    message:"Requisição ao banco de dados não completada!",
                    error: "Error"
                }
            })
        })
    })
})
