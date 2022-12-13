import { fakeReviewData, updatedReview, fakeId } from "../__mocks__/fake.review.data";
import { fakeReviewModel } from "../__mocks__/fake.review.model"
import { ReviewRepository } from "./review.repository";
import { jest } from "@jest/globals"
import exp from "constants";

const reviewRepository = new ReviewRepository(fakeReviewModel)

describe("ReviewRepository", () => {
    describe("getAll", () => {
        it("Deve retornar uma lista de livros", async () => {
            const reviews = await reviewRepository.getAll();
            expect(reviews).toEqual(fakeReviewData)
        })
        it("Deve retornar um array vazio", async () => {
            jest.spyOn(fakeReviewModel, "find").mockResolvedValueOnce([])
            const reviews = await reviewRepository.getAll()
            expect(reviews).toEqual([])
        })
    })

    describe("getById", () => {
        it("deve retornar um livro", async () => {
            const review = await reviewRepository.getById(fakeId)
            expect(review).toEqual(fakeReviewData[0])
        })
        it("Deve retornar um objeto vazio", async () => {
            jest.spyOn(fakeReviewModel, "findById").mockResolvedValueOnce(null)
            const review = await reviewRepository.getById(fakeId)
            expect(review).toEqual({})
        })
    })

    describe("create", () => {
        it("Deve criar um livro", async () => {
            const newReview = await reviewRepository.create(fakeReviewData[0])
            expect(newReview).toEqual(fakeReviewData[0])
        })
    })
    
    describe("update", () => {
        it("Deve atualizar um livro", async () => {
            const review = await reviewRepository.update(fakeId, fakeReviewData[0])
            expect(review).toEqual(updatedReview)
        })
        it("deve retornar um objeto vazio", async () => {
            jest.spyOn(fakeReviewModel, "findByIdAndUpdate").mockResolvedValueOnce(null)

            const review = await reviewRepository.update(fakeId, fakeReviewData[0])
            expect(review).toEqual({})
        })
    })
})