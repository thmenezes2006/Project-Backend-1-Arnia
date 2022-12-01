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
            jest.spyOn(fakeBookRepository)
        })
    })
})