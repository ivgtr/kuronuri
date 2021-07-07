import nonnoun from "../";

describe("Check return", () => {
  const text = "吾輩は猫である";
  const pack = ["▲"];

  test("return default", async () => {
    const ans = "■■は■である";
    const result = await nonnoun({ text });

    expect(result).toBe(ans);
  });

  test("return pack setting", async () => {
    const ans = "▲▲は▲である";
    const result = await nonnoun({ text, pack });

    expect(result).toBe(ans);
  });
});
