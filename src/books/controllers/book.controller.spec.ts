import { mockResponse, mockRequest } from "../__mocks__/fake.book.routes";
import { fakeBookService } from "../__mocks__/fake.book.service";
import { BookController } from "./book.controller";
import { fakeId, fakeBookData } from "../__mocks__/fake.book.data";
import { StatusCode } from "../../utils/status.code";
import { invalidIdError, promiseError } from "../../utils/error.handler";

const bookController = new BookController(fakeBookService);
const req = mockRequest();
const res = mockResponse();

describe("BookController", () => {
  describe("getAll", () => {
    it("Deve retornar todos os livros", async () => {
      await bookController.getAll(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBookData);
    });
    it("Deve retornar todos os livros de um autor", async () => {
      await bookController.getAll(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBookData);
    });
    it("Deve retornar erro 200", async () => {
      await bookController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("Deve retornar uma promessa de erro!", async () => {
      jest
        .spyOn(fakeBookService, "getAll")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await bookController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
  });

  describe("getById", () => {
    it("Deve retornar somente um livro", async () => {
      req.params.id = fakeId;
      await bookController.getById(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBookData[0]);
    });
    it("Deve retornar erro 200", async () => {
      req.params.id = fakeId;
      await bookController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("Deve retornar uma promessa de erro!", async () => {
      req.params.id = fakeId;
      jest
        .spyOn(fakeBookService, "getById")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await bookController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("Deve retornar um erro InvalidID", async () => {
      jest
        .spyOn(fakeBookService, "getById")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));
      await bookController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });

  describe("create", () => {
    it("Deve criar um livro", async () => {
      req.body = fakeBookData[1];
      await bookController.create(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBookData[1]);
    });
    it("Deve retornar um erro 201", async () => {
      req.body = fakeBookData[1];
      await bookController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
    });
    it("Deve retornar uma promessa de erro!", async () => {
      req.body = fakeBookData[1];
      jest
        .spyOn(fakeBookService, "create")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await bookController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
  });

  describe("update", () => {
    it("Deve atualizar um livro", async () => {
      req.params.id = fakeId;
      req.body = fakeBookData[1];
      await bookController.update(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBookData[1]);
    });
    it("deve retornar um erro 200", async () => {
      req.params.id = fakeId;
      req.body = fakeBookData[1];
      await bookController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("Deve retornar uma promessa de erro!", async () => {
      req.params.id = fakeId;
      req.body = fakeBookData[1];
      jest
        .spyOn(fakeBookService, "update")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await bookController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("Deve retornar um erro InvalidID", async () => {
      req.params.id = fakeId;
      req.body = fakeBookData[1];
      jest
        .spyOn(fakeBookService, "update")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));

      await bookController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });

  describe("updateStatus", () => {
    it("Deve atualizar o status de um livro", async () => {
      req.params.id = fakeId;
      req.body = fakeBookData[1];
      await bookController.updateStatus(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBookData[1]);
    });
    it("deve retornar um erro 200", async () => {
      req.params.id = fakeId;
      req.body = fakeBookData[1];
      await bookController.updateStatus(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("Deve retornar uma promessa de erro!", async () => {
      req.params.id = fakeId;
      req.body = fakeBookData[1];
      jest
        .spyOn(fakeBookService, "updateStatus")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await bookController.updateStatus(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("Deve retornar um erro InvalidID", async () => {
      req.params.id = fakeId;
      req.body = fakeBookData[1];
      jest
        .spyOn(fakeBookService, "updateStatus")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));

      await bookController.updateStatus(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });

});
