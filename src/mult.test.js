import mult from "./multiplicador.js";

describe("Multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(mult(3, 2)).toEqual(6);
  });
});
