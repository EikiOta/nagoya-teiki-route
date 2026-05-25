/* 必須駅２駅から条件を満たす候補ルート一覧を出力する関数(DFS) */
import {getNextNode} from "./graphUtils";
import type { currentPathState, candidateRouteList } from "../types/currentPathState";
import isFulfilledCandidateRules from "./routeCandidateRules";
import { createNextPathState } from "./createNextPathState";
import stations from "../data/stationNodes";
import { CONSTRAINT_STATION_KEYS } from "./routeCandidateRules";

/* DFS */
export const routeCandidateFinder = (startNodeId: string, endNodeId: string) => {
    const candidateRouteList: candidateRouteList = [];
    const initialCurrentPathState: currentPathState = initializePathState(startNodeId);// startNode入れたpathState取得
    const recursiveDFS = (currentPathState: currentPathState) => {

        const prevNodeId = currentPathState.routeNodesIds.at(-1);// 末尾が一つ前のnode
        /* type narrowing */
        if(prevNodeId == undefined){
            return;// 異常
        }
    
        /* 終了条件 */
        if(prevNodeId == endNodeId){
            /* 候補ルートリストに追加 */
            candidateRouteList.push(currentPathState);
            return;// endNodeに達したらこの世界線は打ち切って次
        }
        const nextNodeArr: string[] = getNextNode(prevNodeId);
        for(const nextNode of nextNodeArr){
            /* 追加前に制約満たしているか？ */
            if(!isFulfilledCandidateRules(currentPathState, nextNode)){
                continue;
            }
            /* 追加可能 */
            const newCurrentPathState: currentPathState = createNextPathState(currentPathState, nextNode);// 複製&次のpathStateに修正
            
            /* 再帰呼び出し */
            recursiveDFS(newCurrentPathState);
            
        }
    }
    recursiveDFS(initialCurrentPathState);
    return candidateRouteList;
    
}

/* DFSの最初に初期化する関数(startNodeIdをセットする) */
const initializePathState = (startNodeId: string): currentPathState => {
    const startNodeStationKey: string = stations.find((node) => node.id == startNodeId)!.stationKey
    const usedStationKeys = new Set<string>();
    const constraintStationKeys = new Set<string>();
    const initialCurrentPathState: currentPathState = {
        routeNodesIds: [startNodeId],
        usedStationKeys: usedStationKeys.add(startNodeStationKey),
        transferCount: 0,
        constraintStationKeys: constraintStationKeys,
        hasPurchaseWarning: false
    }
    /* 制約駅(特別駅 + 乗り換え駅)リストにあるか */
    if(CONSTRAINT_STATION_KEYS.has(startNodeStationKey)){
        initialCurrentPathState.constraintStationKeys.add(startNodeStationKey);// 追加
    }
    return initialCurrentPathState;
}