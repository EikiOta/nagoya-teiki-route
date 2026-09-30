import type { candidateRouteList } from "../../types/currentPathState";// １段階目DFSの核ルートリスト
import type { ExtendedPathState } from "../../types/extendedPathState";
import type { LocalDfsStats, GlobalMergeStats } from "../../types/routeSearchStats";
import type { CandidatePathList } from "../../types/candidatePath";
import { initializeExtendedPathState } from "./createInitialExtendedPathState";

/* ２段階目DFS(両端拡張)のメイン関数 */
export const extendCoreRouteBothEnds = (coreRouteList: candidateRouteList, maxFareSection: number) => {
    const globalCandidateRoutes: CandidatePathList= [];// 最終的なルート候補リスト
    /* 核ルートごとに取り出す */
    for(const corePathState of coreRouteList){

        /* 核ルートから初期化したextendedPathStateを作成する */
        const iniExtendedPathState:ExtendedPathState =  initializeExtendedPathState(corePathState);
        const localCandidateRoutes: CandidatePathList = [];// ローカル候補の入れ物作成
        /* 核ルート自身をローカル候補に入れる(?) */
        localCandidateRoutes
        /* 核ルートの隣接が伸ばせるか判定(制約を満たすか？) -> 満たさなければcontinue */

        /* 隣接ノードを入れたnextState作成 */

        /* 二重展開にならないか？(すでに片側で探索済みじゃないか？) -> あったらcontinue */

        /* 「その次のルート(nextNextState)」は同一区間内なら、今のnextStateは劣化版確定なので候補ルート配列オブジェに追加しない。 */

        /* そのルートが劣化版か判定する
        - ビット列にして既存の候補ルートと比較
        - 区間 -> 駅数別の構造にして、比較対象を減らす。(同一区間でしか比較しない)
        3.1. (同一区間にて)自分より物理駅数が多い候補と比較 -> 自分が劣化なら保存しない
        3.2. 自分より物理駅数が少ない候補と比較 -> 既存の候補ルート内に自分の劣化がいないか操作する
        */

        /* 核ルート１本終了後、ローカルの候補ルート(生き残り)とグローバルのルート候補(累計)をマージする(この際にも劣化削除) */

        /* 残り全ての核ルートに対して繰り返す。 */
    }
}

