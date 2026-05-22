export type currentPathState = {
  routeNodesIds: string[];// 実際の探索ルート。"H10"などidを格納。
  usedStationKeys: Set<string>; // 一筆書き判定用。すでに通った物理駅を格納。ex: "motoyama" 。存在確認メインなのでset。
  transferCount: number; // 乗り換え回数判定用。3回以内。
  constraintStationKeys: Set<string>; // 「特別駅 + 乗換駅」5駅以内判定用。"motoyama"などを入れる。乗り換えせずに通過した場合も格納される。存在確認メインなのでset。
};