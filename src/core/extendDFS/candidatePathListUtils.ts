/* 候補リストの操作をする関数をまとめたファイル */

import type { CandidatePathList } from "../../types/candidatePath"
import type { ExtendedPathState } from "../../types/extendedPathState"

/* 候補リストに候補パスを追加する関数(使用用途: 核ルート(ExtendedPathState)をローカル候補に入れる) */
export const addCandidatePath = (candidateRoutes: CandidatePathList, extendedPathState: ExtendedPathState) => {
    const targetFareSec = extendedPathState.fareSection;// 区間抽出
    const targetStaCount = extendedPathState.coveredStationCount;// 物理駅数抽出
    /* 候補リストに区間、駅数の箱がすでにあるか？(なければ増やす) */
    if(!candidateRoutes[targetFareSec]){
        /* 区間がないので増やす */
    }else if(!candidateRoutes[targetFareSec][targetStaCount]){
        /* 区間内にターゲットの駅数の箱はあるか？ */
        
    }

}