import { getNextNode } from './findShortestRoutes'
import {getLinerPath} from './findShortestRoutes'
import { isForwardDirection } from './findShortestRoutes';
import { test } from "vitest";

test('隣の駅番号を返す: H01 → H02', () => {
  expect(getNextNode("H01")).toEqual(["H02"])
});

test('駅間の経路を配列に格納したものを返す(末端スタート): H01 -> H04', () => {
  expect(getLinerPath("H01", "H04")).toEqual(['H01', 'H02', 'H03', 'H04'])
});
test('駅間の経路を配列に格納したものを返す(途中スタート): H02 -> H06', () => {
  expect(getLinerPath("H02", "H06")).toEqual(['H02', 'H03', 'H04', 'H05', 'H06'])
});
// test('駅間の経路を配列に格納したものを返す(逆方向): H06 -> H02', () => {
//   expect(getLinerPath("H06", "H02")).toEqual(['H06', 'H05', 'H04', 'H03', 'H02'])
// });

test('方向判定を返す(乗り換えなし) 順方向(true)or逆方向(false)判定: H06 -> H02 trueが正', () => {
  expect(isForwardDirection("H06", "H02")).toBe(false)// 逆方向なんでfalse, 同じノードの場合は順方向扱い
});


test(' 逆方向(乗り換えなし)でも駅間の経路を配列に格納したものを返す: H06 -> H02', () => {
  expect(getLinerPath("H06", "H02")).toEqual(['H06', 'H05', 'H04', 'H03', 'H02'])
});
