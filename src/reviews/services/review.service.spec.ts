import { fakeReviewData, updatedReview, fakeId } from "../__mocks__/fake.review.data";
import { fakeReviewRepository } from "../__mocks__/fake.review.repository";
import { ReviewService } from "./review.service";
import { jest, describe, it, expect } from "@jest/globals";
import { invalidIdError } from "../../utils/error.handler";

const reviewService = new ReviewService(fakeReviewRepository)

describe("ReviewService", () => {
    describe("getAll", () => {
        it("Deve se conectar em Repository.getAll", async () => {
            const spy =jest.spyOn(fakeReviewRepository, "getAll")
            await reviewService.getAll()
            expect(spy).toHaveBeenCalled()
        })
        it("Deve retornar uma lista de reviews", async () => {
            const reviews = await reviewService.getAll()
            expect(reviews).toEqual(fakeReviewData)
        })
        it("Deve retornar uma promessa de Erro", async () => {
            jest.spyOn(fakeReviewRepository, "getAll").mockRejectedValueOnce("Error")
            const error = await reviewService.getAll()
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
            const spy = jest.spyOn(fakeReviewRepository, "getById")
            await reviewService.getById(fakeId)
            expect(spy).toHaveBeenCalled()
        })
        it("Deve retornar um review", async () => {
            const review = await reviewService.getById(fakeId)
            expect(review).toEqual(fakeReviewData[0])
        })
        it("Deve retornar uma promessa de Erro", async () => {
            jest.spyOn(fakeReviewRepository, "getById").mockRejectedValueOnce("Error")
            const error = await reviewService.getById(fakeId)
            expect(error).toEqual({
                promiseError: {
                    message: "Não foi possivel se conectar ao Banco de dados",
                    error: "Error",
                }
            })
        })
        it("Deve retornar um invalidIdError", async () => {
            const error = await reviewService.getById("invalidId")
            expect(error).toEqual(invalidIdError("invalidId"))
          })
    })

    describe("create", () => {
        it("Deve se concectar em Repository.create", async () => {
          const spy = jest.spyOn(fakeReviewRepository, "create")
          await reviewService.create(fakeReviewData[0])
          expect(spy).toHaveBeenCalled()
        })
        it("Deve criar um review", async () => {
          const review = await reviewService.create(fakeReviewData[1])
          expect(review).toEqual(fakeReviewData[1])
        })
        it("Deve retornar uma promessa de Erro", async () => {
          jest.spyOn(fakeReviewRepository, "create").mockRejectedValueOnce("Error")
          const error = await reviewService.create(fakeReviewData[1])
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
          const spy = jest.spyOn(fakeReviewRepository, "update")
          await reviewService.update(fakeId, updatedReview)
          expect(spy).toHaveBeenCalled()
        })
        it("Deve atualizar um review", async () => {
          const review = await reviewService.update(fakeId, updatedReview)
          expect(review).toEqual(updatedReview)
        })
        it("Deve retornar uma promessa de Erro", async () => {
          jest.spyOn(fakeReviewRepository, "update").mockRejectedValueOnce("Error")
          const error = await reviewService.update(fakeId, updatedReview)
          expect(error).toEqual({
            promiseError: {
              message: "Não foi possivel se conectar ao Banco de dados",
              error: "Error",
            },
          })
        })
    
        it("Deve retornar um invalidIdError", async () => {
          const error = await reviewService.update("invalidId", updatedReview)
          expect(error).toEqual(invalidIdError("invalidId"))
        })
      })
})