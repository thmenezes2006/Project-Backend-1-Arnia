import { reviewFactory } from "./review.factory"

describe("UserFactory", () => {
    it("Deve criar o Dominio do Usuario", () => {
        expect(reviewFactory()).toBeDefined();
    })
})