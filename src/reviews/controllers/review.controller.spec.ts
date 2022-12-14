import { mockResponse, mockRequest } from "../__mocks__/fake.review.routes";
import { fakeReviewService } from "../__mocks__/fake.review.service";
import { ReviewController } from "./review.controller";
import { fakeId, fakeReviewData } from "../__mocks__/fake.review.data";
import { StatusCode } from "../../utils/status.code";
import { invalidIdError, promiseError } from "../../utils/error.handler";

const reviewController = new ReviewController(fakeReviewService);
const req = mockRequest();
const res = mockResponse();

describe("ReviewController", () => {
  describe("getAll", () => {
    it("Deve retornar todos os review", async () => {
      await reviewController.getAll(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeReviewData);
    });
    it("Deve retornar erro 200", async () => {
      await reviewController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("Deve retornar uma promessa de erro!", async () => {
      jest
        .spyOn(fakeReviewService, "getAll")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await reviewController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
  });

  describe("getById", () => {
    it("Deve retornar somente um review", async () => {
      req.params.id = fakeId;
      await reviewController.getById(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeReviewData[0]);
    });
    it("Deve retornar erro 200", async () => {
      req.params.id = fakeId;
      await reviewController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("Deve retornar uma promessa de erro!", async () => {
      req.params.id = fakeId;
      jest
        .spyOn(fakeReviewService, "getById")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await reviewController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("Deve retornar um erro InvalidID", async () => {
      jest
        .spyOn(fakeReviewService, "getById")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));
      await reviewController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });

  describe("create", () => {
    it("Deve criar um review", async () => {
      req.body = fakeReviewData[1];
      await reviewController.create(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeReviewData[1]);
    });
    it("Deve retornar um erro 201", async () => {
      req.body = fakeReviewData[1];
      await reviewController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
    });
    it("Deve retornar uma promessa de erro!", async () => {
      req.body = fakeReviewData[1];
      jest
        .spyOn(fakeReviewService, "create")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await reviewController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
  });

  describe("update", () => {
    it("Deve atualizar um review", async () => {
      req.params.id = fakeId;
      req.body = fakeReviewData[1];
      await reviewController.update(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeReviewData[1]);
    });
    it("deve retornar um erro 200", async () => {
      req.params.id = fakeId;
      req.body = fakeReviewData[1];
      await reviewController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("Deve retornar uma promessa de erro!", async () => {
      req.params.id = fakeId;
      req.body = fakeReviewData[1];
      jest
        .spyOn(fakeReviewService, "update")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await reviewController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("Deve retornar um erro InvalidID", async () => {
      req.params.id = fakeId;
      req.body = fakeReviewData[1];
      jest
        .spyOn(fakeReviewService, "update")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));

      await reviewController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });

});
