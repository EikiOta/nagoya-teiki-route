import { getNextNode } from './findShortestRoutes'
import {getLinerPath} from './findShortestRoutes'
test('隣の駅番号を返す: H01 → H02', () => {
  expect(getNextNode("H01")).toEqual(["H02"])
});

test('駅間の経路を配列に格納したものを返す(末端スタート): H01 -> H04', () => {
  expect(getLinerPath("H01", "H04")).toEqual(['H01', 'H02', 'H03', 'H04'])
});
test('駅間の経路を配列に格納したものを返す(途中スタート): H02 -> H06', () => {
  expect(getLinerPath("H02", "H06")).toEqual(['H02', 'H03', 'H04', 'H05', 'H06'])
});