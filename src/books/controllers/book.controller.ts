import { BookService } from "../services/book.service";
import { StatusCode } from "../../utils/status.code";
import { Request, Response } from "express";
import { fakeBookData } from "../__mocks__/fake.book.data";

export class BookController {
  constructor(private readonly bookService: BookService) {}

  async getAll(req: Request, res: Response) {
    const result = await this.bookService.getAll();
    const {autor} = req.query
    if (autor) {
      const result = await this.bookService.getAllByAuthor(autor as string);
      return res.status(StatusCode.OK).json(result);

    }

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const result = await this.bookService.getById(id);

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async create(req: Request, res: Response) {
    const { body } = req;

    const result = await this.bookService.create(body);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.CREATED).json(result);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;

    const result = await this.bookService.update(id, body);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async updateStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;

    const result = await this.bookService.updateStatus(id, body);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }
}
