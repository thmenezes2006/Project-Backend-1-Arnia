import { isIdValid } from "./id.validator";

describe("id.validator", () => {
  describe("isIdValid", () => {
    it("Deve ser definido", () => {
      expect(isIdValid).toBeDefined();
    });
    it("Deve retornar true", () => {
      const result = isIdValid("5f6f1e8d4a6a0c0e4c0e1b8a");
      expect(result).toBeTruthy();
    });
    it("Deve retornar false", () => {
      const result = isIdValid("invalidId");
      expect(result).toBeFalsy();
    });
  });
});
