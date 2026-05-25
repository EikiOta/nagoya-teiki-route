import type { currentPathState } from "../types/currentPathState";
import stations from "../data/stationNodes";
import { isTransferred, getPrevStationKey } from "./graphUtils";

/* 
名古屋市営地下鉄定期ルート条件
1. 路線図内で一筆書き 2. 乗り換え3回まで 3. 特定の駅（大曽根、金山、西高蔵、国際センター、吹上）と乗り換え駅の総数が5を超えない
*/

/* 特別駅(経路・接続号線を判別する駅（大曽根、金山、西高蔵、国際センター、吹上）) stationKey準拠 */
export const SPECIAL_STATION_KEYS = new Set<string>(["ozone", "kanayama", "nishitakakura", "kokusai_center", "fukiage"]);
export const TRANSFER_STATION_KEYS = new Set<string>(["kanayama", "nagoya", "fushimi", "sakae", "imaike", "motoyama", "heiandori", "kamimaezu", "hisaya_odori", "yagoto", "aratamabashi", "marunouchi", "gokiso"]);
export const CONSTRAINT_STATION_KEYS = new Set([...SPECIAL_STATION_KEYS, ...TRANSFER_STATION_KEYS]);
/* 条件を満たしてるかbooleanで判定する関数。 一筆書き -> 乗り換え(あれば) -> 特定駅数 の順番*/
export const isFulfilledCandidateRules = (currentPathState: currentPathState, nextNodeId: string): boolean => {

    /* nextNodeIdは既存のルート配列(routeNodeIds)にあるか？(ガード節) */
    if(currentPathState.routeNodesIds.includes(nextNodeId)){
        return false;// あった場合はアウト
    }
    const nextStationKey:string = stations.find((node) => node.id == nextNodeId)!.stationKey;// nodeIdからstationKeyに変換
    



    /* nextNodeIdのstationKeyはusedStationKeysの中にあるか？-> true: ただの乗り換えか判定, false: 一筆書きは満たしている */
    if(currentPathState.usedStationKeys.has(nextStationKey)){
        /* currentPathStateから直前(prevNode)のstationKeyを取得 */
        const prevStationKey = getPrevStationKey(currentPathState);
        /* 直前の駅名と今回の駅名が同じではない？（乗り換えの有無） FIXME: 否定命題なので変えたい */
        if(!isTransferred(nextStationKey, prevStationKey)){
            return false;
        }
        /* 現在の乗り換え回数は３回？ */
        if(currentPathState.transferCount == 3){
            return false;// これ以上乗り換えできないためアウト
        }
    }

    /* constraintStationKeysに追加する必要があるか？ -> 特別駅もしくは乗り換え対象駅で、既存のconstraintStationKeysにない？ */
    if(shouldAddConstraintStationKey(nextStationKey, currentPathState)){
        if(currentPathState.constraintStationKeys.size == 5){
            return false;// 5駅以上無理なので追加不可
        }
    }
    return true;// 追加可能
}
export default isFulfilledCandidateRules;


/* constraintStationKeys(通過した制約駅)に追加する必要があるか？ -> 特別駅もしくは乗り換え対象駅で、既存のconstraintStationKeysにない？を判定する関数 */
export const shouldAddConstraintStationKey = (targetStationKey: string, currentPathState: currentPathState) => {
    /* ターゲットは制約リスト(乗り換え駅または特別駅)にある駅かつ既存のconstraintStationKeysにないか？ */
    if((CONSTRAINT_STATION_KEYS.has(targetStationKey)) && !currentPathState.constraintStationKeys.has(targetStationKey)){
        return true;// 追加する必要あり
    }else{
        return false;// 追加不要
    }
}