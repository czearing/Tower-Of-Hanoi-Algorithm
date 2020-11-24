import { TowerOfHanoi, numberOfTurns } from "./TowerOfHanoi";

describe("TowerOfHanoi", () => {
  it("has an optimized number of turns", () => {
    const pillars: number[][] = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [], []];
    TowerOfHanoi(pillars);
    expect(numberOfTurns).toStrictEqual(511);
  });

  it("moves items to the final piller", () => {
    const pillars: number[][] = [[9, 8, 7, 6, 5, 4, 3, 2, 1], [], []];
    expect(TowerOfHanoi(pillars)).toStrictEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

  it("handles other numbers", () => {
    const pillars: number[][] = [[9, 8, 7, 3, 1], [], []];
    expect(TowerOfHanoi(pillars)).toStrictEqual([9, 8, 7, 3, 1]);
  });

  it("handles zero items", () => {
    const pillars: number[][] = [[], [], []];
    expect(TowerOfHanoi(pillars)).toStrictEqual([]);
  });

  it("handles reversed items", () => {
    const pillars: number[][] = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [], []];
    expect(TowerOfHanoi(pillars)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
