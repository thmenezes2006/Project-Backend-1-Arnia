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
                    message: "Não foi possivel se conectar ao Banco de dados",
                    error: "Error",
                }
            })
        })
    })

    describe("getById", () => {
        it("Deve se concectar em Repository.getById", async () => {
            const spy = jest.spyOn(fakeBookRepository, "getById")
            await bookService.getById(fakeId)
            expect(spy).toHaveBeenCalled()
        })
        it("Deve retornar um livro", async () => {
            const book = await bookService.getById(fakeId)
            expect(book).toEqual(fakeBookData[0])
        })
        it("Deve retornar uma promessa de Erro", async () => {
            jest.spyOn(fakeBookRepository, "getById").mockRejectedValueOnce("Error")
            const error = await bookService.getById(fakeId)
            expect(error).toEqual({
                promiseError: {
                    message: "Não foi possivel se conectar ao Banco de dados",
                    error: "Error",
                }
            })
        })
        it("Deve retornar um invalidIdError", async () => {
            const error = await bookService.getById("invalidId")
            expect(error).toEqual(invalidIdError("invalidId"))
          })
    })

    describe("create", () => {
        it("Deve se concectar em Repository.create", async () => {
          const spy = jest.spyOn(fakeBookRepository, "create")
          await bookService.create(fakeBookData[0])
          expect(spy).toHaveBeenCalled()
        })
        it("Deve criar um livro", async () => {
          const book = await bookService.create(fakeBookData[1])
          expect(book).toEqual(fakeBookData[1])
        })
        it("Deve retornar uma promessa de Erro", async () => {
          jest.spyOn(fakeBookRepository, "create").mockRejectedValueOnce("Error")
          const error = await bookService.create(fakeBookData[1])
          expect(error).toEqual({
            promiseError: {
              message: "Não foi possivel se conectar ao Banco de dados",
              error: "Error",
            },
          })
        })
      })

      describe("update", () => {
        it("Deve se concectar em Repository.update", async () => {
          const spy = jest.spyOn(fakeBookRepository, "update")
          await bookService.update(fakeId, updatedBook)
          expect(spy).toHaveBeenCalled()
        })
        it("Deve atualizar um livro", async () => {
          const book = await bookService.update(fakeId, updatedBook)
          expect(book).toEqual(updatedBook)
        })
        it("Deve retornar uma promessa de Erro", async () => {
          jest.spyOn(fakeBookRepository, "update").mockRejectedValueOnce("Error")
          const error = await bookService.update(fakeId, updatedBook)
          expect(error).toEqual({
            promiseError: {
              message: "Não foi possivel se conectar ao Banco de dados",
              error: "Error",
            },
          })
        })
    
        it("Deve retornar um invalidIdError", async () => {
          const error = await bookService.update("invalidId", updatedBook)
          expect(error).toEqual(invalidIdError("invalidId"))
        })
      })
})