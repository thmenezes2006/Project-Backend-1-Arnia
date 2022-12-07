import { promiseError, invalidIdError } from "./error.handler";

describe("error.handler", () => {
  describe("promiseError", () => {
    it("Deve ser definido", () => {
      const error = promiseError("error");
      expect(error).toBeDefined();
    });
    it("Deve retornar um objeto com uma propriedade promiseError", () => {
      const error = promiseError("error");
      expect(error.promiseError).toBeDefined();
    });
    it("Deve retornar um objeto com uma propriedade promiseError com uma propriedade de mensagem", () => {
      const error = promiseError("error");
      expect(error).toEqual({
        promiseError: {
          message: "Não foi possivel se conectar ao Banco de dados",
          error: "error",
        },
      });
    });
  });
  describe("invalidIdError", () => {
    it("Deve ser definido", () => {
      const error = invalidIdError("invalidId");
      expect(error).toBeDefined();
    });
    it("Deve retornar um objeto com uma propriedade invalidIdError", () => {
      const error = invalidIdError("invalidId");
      expect(error.invalidIdError).toBeDefined();
    });
    it("Deve retornar um objeto com uma propriedade invalidIdError com uma propriedade de mensagem", () => {
      const error = invalidIdError("invalidId");
      expect(error).toEqual({
        invalidIdError: {
          message: "Requisição de Id inválida, por favor envie um ObjectId",
          id: "invalidId",
        },
      });
    });
  });
});
