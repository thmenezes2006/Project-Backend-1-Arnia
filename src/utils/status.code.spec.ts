import { StatusCode } from "./status.code";

describe("status.code", () => {
  describe("StatusCode", () => {
    it("Deve ser definido", () => {
      expect(StatusCode).toBeDefined();
    });
    it("Deve retornar a 200 status code", () => {
      expect(StatusCode.OK).toEqual(200);
    });
    it("Deve retornar a 201 status code", () => {
      expect(StatusCode.CREATED).toEqual(201);
    });
    it("Deve retornar a 204 status code", () => {
      expect(StatusCode.NO_CONTENT).toEqual(204);
    });
    it("Deve retornar a 400 status code", () => {
      expect(StatusCode.BAD_REQUEST).toEqual(400);
    });
    it("Deve retornar a 401 status code", () => {
      expect(StatusCode.UNAUTHORIZED).toEqual(401);
    });
    it("Deve retornar a 403 status code", () => {
      expect(StatusCode.FORBIDDEN).toEqual(403);
    });
    it("Deve retornar a 404 status code", () => {
      expect(StatusCode.NOT_FOUND).toEqual(404);
    });
    it("Deve retornar a 500 status code", () => {
      expect(StatusCode.INTERNAL_SERVER_ERROR).toEqual(500);
    });
    it("Deve retornar a 501 status code", () => {
      expect(StatusCode.NOT_IMPLEMENTED).toEqual(501);
    });
    it("Deve retornar a 502 status code", () => {
      expect(StatusCode.BAD_GATEWAY).toEqual(502);
    });
    it("Deve retornar a 503 status code", () => {
      expect(StatusCode.SERVICE_UNAVAILABLE).toEqual(503);
    });
    it("Deve retornar a 504 status code", () => {
      expect(StatusCode.GATEWAY_TIMEOUT).toEqual(504);
    });
  });
})