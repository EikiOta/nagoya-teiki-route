import { getNextNode } from './findShortestRoutes'
import {getLinerPath} from './findShortestRoutes'
import { isForwardDirection } from './findShortestRoutes';
import { getShortestPath } from './findShortestRoutes';
import { isForwardDirByArr } from './findShortestRoutes';
import { isTransferNextNode } from './findShortestRoutes';
import { calcDistance } from './findShortestRoutes';
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
  expect(getShortestPath("H05", "S03")).toEqual(['H06', 'H07', 'H08', 'S02', 'S03'])
});

test('配列に格納されたルートから方向を順方向(true)or逆方向(false)判定する', () => {
  expect(isForwardDirByArr(["H05", "H06", "H07", "H08", "S02", "S03"])).toBe(true)
});

test('次のノードが乗り換えかどうか判定', () => {
  expect(isTransferNextNode("H08", "S02")).toBe(true)
});

test('配列に格納されたルートの距離を算出する関数 H05 -> S03', () => {
  expect(calcDistance(["H05", "H06", "H07", "H08", "S02", "S03"])).toEqual(3.7)
});
test('配列に格納されたルートの距離を算出する. ただし乗り換え後進行方向方向逆転 H07 -> T05', () => {
  expect(calcDistance(["H07", "H08", "H09", "T07", "T06", "T05"])).toEqual(4.5)
});