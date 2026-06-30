/* グローバル候補ルートリスト, ローカル候補ルートリストに用いる型定義 */

import type { ExtendedPathState } from "./extendedPathState";
/* 物理駅数別の候補ルート
HACK: ExtendedPathStateごと持たせているが、無駄な情報も多いので型別途作るリファクタの余地あり
*/
type CandidatePathsByStationCount = {
    [key: number]:  ExtendedPathState[];
}
/* 
候補ルートリスト(区間別 -> 駅数別 -> ExtendedPathState)
*/
export type CandidatePathList = {
    [key: number]: CandidatePathsByStationCount;
}

