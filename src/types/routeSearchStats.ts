/* 2段階目の両端DFSにて、計算量や比較回数などを記録する型(ローカル: 各ルート単位, グローバル: 総合) */

/* ローカルのログ */
export type LocalDfsStats = {
    coreRouteKey:  string;// どの核ルートか(例: "H10-H11-H12-H13")
    expandedStateCount: number;// ２段階目両端DFSで何状態みたか
    degradationCompareCount: number;// ローカル候補リスト内で劣化比較を行った回数
    localSurvivorCount: number;// ２段階DFS終了後に残った候補ルート数
    sameFareExpandableSkipCount: number;// 同一区間のまま物理駅を増やして伸ばせるため、候補保存をスキップした回数(最適化の確認)
    elapsedMs: number; // 実行時間
}

/* グローバルのログ */
export type GlobalMergeStats = {
    mergeCompareCount: number;// local -> globalマージ時の比較回数
    mergedCandidateCount: number;// local -> globalへ何本候補を流し込もうとしたか
    globalSurvivorCount: number;// 最終的にglobal候補が何本残ったか
    elapsedMs: number;// 実行時間
}