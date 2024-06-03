describe("demo", function () { //tambien puede escribirse asi describe("demo"), () => {}
  it("Este test debe pasar siempre", function () { //==> () => {}
    expect(4 + 2).toBe(6);
  });
});
