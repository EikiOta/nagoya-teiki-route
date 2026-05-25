import adjacencyList from "../data/adjacencyList";
import type { currentPathState } from "../types/currentPathState";
import stations from "../data/stationNodes";
/* 隣接ノードを取得(乗り換えも含む) */
export const getNextNode = (nodeId: string):string[] =>  {
  const nextNodeArr: string[] = [];
  const arrLen: number = adjacencyList[nodeId].length;
  for(let i:number = 0;i < arrLen;i++){
    nextNodeArr.push(adjacencyList[nodeId][i].node_id);
  }
  return nextNodeArr;
};

/* 乗り換えしたか判定する関数(つまり直前のノードと今回のノードが同じか？) */
export const isTransferred = (currentStationKey: string, prevStationKey: string):boolean => {
    if(currentStationKey == prevStationKey){
        return true;
    }
    return false;
}

/* 現在のcurrentPathStateから直近(prevNode)のstationKeyを取得する関数 */
export const getPrevStationKey = (currentPathState: currentPathState): string => {
        const prevStationNodeId = currentPathState.routeNodesIds.at(-1);// ルート配列の末尾(つまり直前のノード)を取得
        const prevStationKey = stations.find((node) => node.id == prevStationNodeId)!.stationKey;// 直前ノードをstationKeyに変換
        return prevStationKey;
}