import type { currentPathState } from "../types/currentPathState";
import { isTransferred, getPrevStationKey } from "./graphUtils";
import stations from "../data/stationNodes";
import { shouldAddConstraintStationKey } from "./routeCandidateRules";
import { calcAdjacencyNodeDist } from "./findShortestRoutes";
/* ノードを進むたびに新たなcurrentPathStateを用意する.
ここで次の再帰に渡すcurrentPathStateを作成する（nodeの追加なども)
-> 再帰ごとに複製する。使い回すと別の世界線のものが混じってバグの温床
*/
export const createNextPathState = (currentPathState: currentPathState, nextNode: string): currentPathState => {
    const prevNodeId = currentPathState.routeNodesIds.at(-1);// 末尾が一つ前のnode
    /* type narrowing */
    if(prevNodeId == undefined){
        throw new Error("routeNodesIds is empty");// undefinedは異常なのでエラー判定
    }

    const distCurrentToNext: number = calcAdjacencyNodeDist(prevNodeId, nextNode);
    const newCurrentPathState: currentPathState = {
        routeNodesIds: [...currentPathState.routeNodesIds, nextNode],
        usedStationKeys: new Set(currentPathState.usedStationKeys),
        transferCount: currentPathState.transferCount,
        constraintStationKeys: new Set(currentPathState.constraintStationKeys),
        hasPurchaseWarning: currentPathState.hasPurchaseWarning,
        distanceMeters: currentPathState.distanceMeters + distCurrentToNext
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
    /* constraintStationKeysを追加する必要があるか */
    if(shouldAddConstraintStationKey(nextStationKey, currentPathState)){
        newCurrentPathState.constraintStationKeys.add(nextStationKey);// 制約駅リストに新規追加
        if((!newCurrentPathState.hasPurchaseWarning) && (newCurrentPathState.constraintStationKeys.size > 5)){
            newCurrentPathState.hasPurchaseWarning = true;
        }
    }
    return newCurrentPathState;
}
