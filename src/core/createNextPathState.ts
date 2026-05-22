import type { currentPathState } from "../types/currentPathState";
import { isTransferred, getPrevStationKey } from "./graphUtils";
import stations from "../data/stationNodes";
/* ノードを進むたびに新たなcurrentPathStateを用意する.
ここで次の再帰に渡すcurrentPathStateを作成する（nodeの追加なども)
-> 再帰ごとに複製する。使い回すと別の世界線のものが混じってバグの温床
*/
export const createNextPathState = (currentPathState: currentPathState, nextNode: string) => {
    const newCurrentPathState: currentPathState = {
        routeNodesIds: [...currentPathState.routeNodesIds, nextNode],
        usedStationKeys: new Set(...currentPathState.usedStationKeys),
        transferCount: currentPathState.transferCount,
        constraintStationKeys: new Set(...currentPathState.constraintStationKeys)
    }
    const prevStationKey = getPrevStationKey(currentPathState);
    const nextStationKey = stations.find((node) => node.id == nextNode)!.stationKey;
    /* 乗り換え判定。usedStationKeys, transferCount -> 乗り換え発生時に変わる*/
    if(isTransferred(nextStationKey, prevStationKey)){
        newCurrentPathState.transferCount++;
    }else{
        /* 乗り換えではない場合 */
        newCurrentPathState.usedStationKeys.add(nextStationKey);// stationKeyを物理駅リストに追加
    }
    return newCurrentPathState;
}
