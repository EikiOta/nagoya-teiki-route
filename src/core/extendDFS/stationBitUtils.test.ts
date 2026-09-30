import { describe, it, expect, vi } from "vitest";

/*
  テスト用に stationNodes を固定する。
  本物の駅データに依存すると、
  駅リストの順番が変わっただけでテストが壊れるため。
*/
vi.mock("../data/stationNodes", () => {
  return {
    default: [
      { stationKey: "fukiage" },
      { stationKey: "imaike" },
      { stationKey: "fukiage" }, // 重複。bitIndexは増えない想定
      { stationKey: "chikusa" },
    ],
  };
});

import { convertStationKeysToBits } from "./stationBitUtils";

describe("convertStationKeysToBits", () => {
  it("空のSetなら0nを返す", () => {
    const result = convertStationKeysToBits(new Set());

    expect(result).toBe(0n);
  });

  it("1つのstationKeyを対応するbit位置に変換する", () => {
    const usedStationKeys = new Set(["fukiage"]);

    const result = convertStationKeysToBits(usedStationKeys);

    // fukiage は 0番目なので 1 << 0 = 1
    expect(result).toBe(1n);
  });

  it("複数のstationKeyをORして1つのビット列にする", () => {
    const usedStationKeys = new Set(["fukiage", "imaike"]);

    const result = convertStationKeysToBits(usedStationKeys);

    expect(result).toBe(3n);
  });

  it("stationNodes側の重複stationKeyはスキップされる", () => {
    const usedStationKeys = new Set(["chikusa"]);

    const result = convertStationKeysToBits(usedStationKeys);

    expect(result).toBe(4n);
  });

  it("存在しないstationKeyが来たらエラーを投げる", () => {
    const usedStationKeys = new Set(["unknown_station"]);

    expect(() => convertStationKeysToBits(usedStationKeys)).toThrow(
      "stationKeyに対応するbitIndexが見つかりませんでした"
    );
  });
});