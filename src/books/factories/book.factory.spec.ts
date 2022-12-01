import { bookFactory } from "./book.factory"

describe("UserFactory", () => {
    it("Deve criar o Dominio do Usuario", () => {
        expect(bookFactory()).toBeDefined();
    })
})