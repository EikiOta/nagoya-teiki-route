import { test } from "vitest";
import { routeCandidateFinder } from "./routeCandidateFinder";


test('DFSで候補ルート返却(一本道): H01 → H06', () => {
  expect(routeCandidateFinder("H01", "H06")).toEqual()
});
test('DFSで候補ルート返却(乗り換えあり): H09 → T08', () => {
  expect(routeCandidateFinder("H09", "T08")).toEqual()
});