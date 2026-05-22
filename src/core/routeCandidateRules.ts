import type { currentPathState } from "../types/currentPathState";
import stations from "../data/stationNodes";
import { isTransferred, getPrevStationKey } from "./graphUtils";

/* 
名古屋市営地下鉄定期ルート条件
1. 路線図内で一筆書き 2. 乗り換え3回まで 3. 特定の駅（大曽根、金山、西高蔵、国際センター、吹上）と乗り換え駅の総数が5を超えない
*/

/* 特別駅(経路・接続号線を判別する駅（大曽根、金山、西高蔵、国際センター、吹上）) stationKey準拠 */
export const SPECIAL_STATION_KEYS = new Set<string>(["ozone", "kanayama", "nishitakakura", "kokusai_center", "fukiage"]);

/* 条件を満たしてるかbooleanで判定する関数。 一筆書き -> 乗り換え(あれば) -> 特定駅数 の順番*/
export const isFulfilledCandidateRules = (currentPathState: currentPathState, nextNodeId: string): boolean => {

    /* nextNodeIdは既存のルート配列(routeNodeIds)にあるか？(ガード節) */
    if(currentPathState.routeNodesIds.includes(nextNodeId)){
        return false;// あった場合はアウト
    }
    const nextStationKey:string = stations.find((node) => node.id == nextNodeId)!.stationKey;// nodeIdからstationKeyに変換
    /* nextNodeIdのstationKeyはusedStationKeysの中にあるか？ */
    if(currentPathState.usedStationKeys.has(nextStationKey)){
        /* currentPathStateから直前(prevNode)のstationKeyを取得 */
        const prevStationKey = getPrevStationKey(currentPathState);
        /* 直前の駅名と今回の駅名が同じではない？（乗り換えの有無） */
        if(!isTransferred(nextStationKey, prevStationKey)){
            return false;
        }
        /* 現在の乗り換え回数は３回？ */
        if(currentPathState.transferCount == 3){
            return false;// これ以上乗り換えできないためアウト
        }
    }else{
        /* 特別駅ではない？ */
        if(!SPECIAL_STATION_KEYS.has(nextStationKey)){
            return true;// 特別駅でないなら追加可能
        }
    }
    /* constraintStationKeys(特別駅 + 乗り換え駅)の数が上限の5であるか？ */
    if(currentPathState.constraintStationKeys.size == 5){
        return false;// これ以上乗り換え駅or特別駅を増やすことは不可能なのでアウト
    }
    /* 追加確定 */
    return true;// 追加可能
}
export default isFulfilledCandidateRules;