import {adjacencyList, type AdjacencyList} from "../data/adjacencyList";
import { distanceFromNodeList, type DistanceFromNodeList } from "../types/distanceFromNodeList";
import { DistanceFromNode } from "../types/distanceFromNodeList";
export const findShortestRoutes = function (
  startNodeId: string,
  endNodeId: string
): void {
  //const fuga: keyof AdjacencyList = startNodeId;
  // console.log(adjacencyList[hoge]);
  //console.log(adjacencyList[startNodeId]);
  // console.log(adjacencyList[startNodeId]);
  //console.log(foo[startNodeId]);
  //console.log(adjacencyList[startNodeId][0].type)
};
/* 隣接ノードを取得(乗り換えも含む) */
export const getNextNode = (nodeId: string):string[] =>  {
  const nextNodeArr: string[] = [];
  const arrLen: number = adjacencyList[nodeId].length;
  for(let i:number = 0;i < arrLen;i++){
    /* 乗り換えは除外 */
    // if(adjacencyList[nodeId][i].type == "transfer"){
    //   break;
    // }
    nextNodeArr.push(adjacencyList[nodeId][i].node_id);
  }
  return nextNodeArr;
};
/* 乗り換えを除いた一直線の経路を配列で返す(ただし先頭が末端の場合) */
export const getLinerPath = (startNodeId: string, endNodeId: string):string[] => {
  const judgeDir:boolean = isForwardDirection(startNodeId, endNodeId); // 順方向 -> true, 逆方向-> false
  
  let pathArr: string[];
  if(judgeDir){
    pathArr= ForwardDirectionArray(startNodeId, endNodeId);
  }else{
    
    pathArr= reverseDirectionArray(startNodeId, endNodeId);
  }
   return pathArr;
}

/* 順方向の場合に経路を配列に格納する関数 */
const ForwardDirectionArray = (startNodeId: string, endNodeId: string):string[] => {
  const pathArr: string[] = [];
  let nowNodeId:string = "";
  pathArr.push(startNodeId);
  /* 末端ノード */
  if(adjacencyList[startNodeId].length == 1){
    pathArr.push(getNextNode(startNodeId)[0]);// [H01, H02]
    nowNodeId = getNextNode(startNodeId)[0];
  }else{
  pathArr.push(getNextNode(startNodeId)[1]);// [H01, H02]
  nowNodeId = getNextNode(startNodeId)[1];
  }
  /* 格納している配列の末尾が終点ノードでない限り回す */
  // H02
   while(pathArr[pathArr.length - 1] != endNodeId){
    const nextNodeId: string = getNextNode(nowNodeId)[1];
    pathArr.push(nextNodeId);
    nowNodeId = nextNodeId;
   //pathArr.push(adjacencyList[startNodeId][1].node_id);
   }
   return pathArr;
}

/* 逆方向の場合に経路を配列に格納する関数 */
const reverseDirectionArray = (startNodeId: string, endNodeId: string): string[] => {
  const pathArr: string[] = [];
  pathArr.push(startNodeId);
  pathArr.push(getNextNode(startNodeId)[0]);
  let nowNodeId = getNextNode(startNodeId)[0];
  
  /* 格納している配列の末尾が終点ノードでない限り回す */
  // H02
   while(pathArr[pathArr.length - 1] != endNodeId){
    const nextNodeId: string = getNextNode(nowNodeId)[0];
    pathArr.push(nextNodeId);
    nowNodeId = nextNodeId;
   
   }
   return pathArr;
}


/* 順方向(true), 逆方向(false)を特定する関数 ※通常 */
export const isForwardDirection =(startNodeId: string, endNodeId: string): boolean => {
  const intStartNodeId: number = stringNodeToIntNode(startNodeId);// 6
  const intEndNodeId: number = stringNodeToIntNode(endNodeId);// 2
  if(intStartNodeId <= intEndNodeId){
    return true;
  }else{
    return false;
  }
}

/* nodeId(例: "H05")を数字(例: 5)に変換する関数 */
const stringNodeToIntNode = (nodeId: string): number => {
  //console.log(nodeId);
  const slicedNodeId: string = nodeId.slice(1);
  const intNodeId: number = Number(slicedNodeId);
  return intNodeId;
}
/* ダイクストラ法による最短ルート算出 */
export const dijkstra = (startNodeId: string, endNodeId: string): string[] => {

  let targetNodeId: string = startNodeId;// "H05"
  //let queue: DistanceFromNodeList = [];//[{node_id, distance }] // queueは次の確定距離候補になる暫定距離のリスト。

  /* STEP1: スタート点からスタート点までの確定距離を0にする。 */
  distanceFromNodeList.find((node) => node.id === startNodeId)!.distance = 0;// リストのスタート点の距離を0(自明)
  distanceFromNodeList.find((node) => node.id === startNodeId)!.isConfirmed = true;// "!"でnullにならないことを保証 
  /* 終了条件: ゴール点(endNodeId)が確定距離出たとき */
  while(!distanceFromNodeList.find((node) => node.id === endNodeId)!.isConfirmed){
  /* 隣接ノード取得 */
  let nextNodeArr: string[] = getNextNode(targetNodeId);// [H01, H03]
  /* targetNodeIdの確定距離。(たどる元の距離）＋（辺に示された距離)の「たどる元の距離」にあたる */
  const targetNodeIdDist: number = distanceFromNodeList.find((node) => node.id === targetNodeId)!.distance;
    /* STEP2 確定距離の点と隣接点を精査して、短ければ上書き */
    for(const node of nextNodeArr){
      //console.log("現在の隣接ノード: "+ node);
      //console.log("ターゲットノード: " + targetNodeId)
      // console.log(calcDistance([targetNodeId, node]));
      const tempNode = distanceFromNodeList.find((nodes) => nodes.id === node);// ノードのオブジェクト取得
            //const isAddedQueue: boolean = distanceFromNodeList.some((nodes) => nodes.id === node);
      //console.log("tempNode: " + tempNode?.id)
      /* 隣接ノードが暫定距離かつqueueにすでにある暫定距離より短い場合(ない場合はちゃんと0になるのか？)  */
      if((tempNode!.isConfirmed == false) && (targetNodeIdDist + calcAdjacencyNodeDist(targetNodeId, node)! < tempNode!.distance)){
          tempNode!.distance =  targetNodeIdDist + calcAdjacencyNodeDist(targetNodeId, node)!;// より短いものに更新
          tempNode!.previousNodeId = targetNodeId;// 辿るノードを保存する(ゴールから後で逆に辿る)
          //console.log("最短距離更新！")
      }

    }
         /* STEP3: 一番短い暫定距離のものを確定距離にする */
    const targetUnconfirmedNodeId: string = minIsConfirmed(distanceFromNodeList).id;// 未確定最小ノードid取得
    distanceFromNodeList.find((node) => node.id === targetUnconfirmedNodeId)!.isConfirmed = true;// 暫定 -> 確定距離に変更
    targetNodeId = targetUnconfirmedNodeId;// 今確定したノードの隣接を次回ループで探るためtargetに設定
  }
  console.log(distanceFromNodeList)
  const shortestArr: string[] = [endNodeId];// ゴールから最短ノード辿る配列用意

  let tracedNodeId = distanceFromNodeList.find((nodes) => nodes.id === endNodeId)!.previousNodeId;// 

  while(tracedNodeId != distanceFromNodeList.find((nodes) => nodes.id === startNodeId)!.previousNodeId){
    shortestArr.push(tracedNodeId!);// 入れる(ただし逆順になる)
    tracedNodeId = distanceFromNodeList.find((nodes) => nodes.id === tracedNodeId)!.previousNodeId;// ノード辿る
  }
  console.log(shortestArr)
  shortestArr.reverse();

  return shortestArr;
}

/* 暫定距離キューのソート (不使用)*/
export const sortDistanceList  = (queue: DistanceFromNodeList) => {
  queue.sort((a: DistanceFromNode,b: DistanceFromNode) => a.distance - b.distance)// 距離でソートする関数
  return queue;
};

/* 現状の駅距離リストから暫定かつ一番短いDistanceFromNodeを返す関数(確定ノードに変えるため) */
export const minIsConfirmed = (currentList: DistanceFromNodeList) => {
  const unconfirmedNodeList: DistanceFromNodeList = currentList.filter(({ isConfirmed }) => isConfirmed === false);// 暫定距離のノードリストを生成
  /* 最短距離のNodeObjを返す関数定義 */
  const minDistanceFinder = (NodeList: DistanceFromNodeList) => {  return NodeList.reduce((accumulator: DistanceFromNode, currentValue:DistanceFromNode) =>
    currentValue.distance < accumulator.distance ? currentValue : accumulator
  );} 
  const minDistanceNodeObj = minDistanceFinder(unconfirmedNodeList);// 未確定かつ最短距離のobjを取得して代入

  return minDistanceNodeObj;
}

/* 現状のdistanceFromNodeListがすべて確定しているか判定する関数 */
export const isAllNodeOfListConfirmed = (currentList: DistanceFromNodeList) => {
  return !currentList.map((node) => node.isConfirmed).includes(false);// 未確定が一つでもあったらfalse, なければtrue(すべて精査判定)
}



// ２つのノードを比較して方向を判定する
export const isForwardDirByArr = (firstNodeId: string, secondNodeId: string): boolean => {
  const startNodeId = stringNodeToIntNode(firstNodeId);// 5
  const nextNodeId = stringNodeToIntNode(secondNodeId);// 6
  if(startNodeId < nextNodeId){
    return true;
  }else{
    return false;
  }
}
// 次のノードが乗り換えかどうか判定
export const isTransferNextNode = (nowNodeId: string, nextNodeId: string): boolean => {
  const nowRouteSymbol: string = nowNodeId.slice(0,1);
  const nextRouteSymbol: string = nextNodeId.slice(0,1);
  if(nowRouteSymbol == nextRouteSymbol){
    return false;
  }else{
    return true;
  }
}

// 配列に格納されたルートの距離を算出する関数 ["H05", "H06", "H07", "H08", "S02", "S03"]
export const calcDistance = (pathArr: string[]): number =>  {
  let isForward: boolean = isForwardDirByArr(pathArr[0], pathArr[1]);// 順方向 -> true, 逆方向 -> false
  let totalDistance: number = 0;
  for(let i = 0; i < pathArr.length - 1;i++){
    /* 乗り換え判定 */
    if(isTransferNextNode(pathArr[i], pathArr[i + 1])){
      isForward = isForwardDirByArr(pathArr[i + 1], pathArr[i + 2]);// 乗り換え後の方向を判定
      continue;// 乗り換えは距離発生しないのでスキップ
    }
    const nowNodeId :string = pathArr[i];//"H05"
    /* 順方向 */
    //console.log(adjacencyList[nowNodeId].length)
    /* 今のノードの隣接リストの配列の長さ 1 -> 端点, 2以上 -> 中間点 */
    const nowNodeLen = adjacencyList[nowNodeId].length;

    /* 中間点(乗り換えありも含む)の場合 */
    if(nowNodeLen >= 2){
      if(isForward){
        totalDistance += adjacencyList[nowNodeId][1].distance ?? 0;// デフォルト値0
      }else{
        /* 逆方向 */
        totalDistance += adjacencyList[nowNodeId][0].distance ?? 0;
      }
    }else{
      /* 端点は一方向しか選択肢ない */
      totalDistance += adjacencyList[nowNodeId][0].distance ?? 0;// 端点はlengthが1なので[0]
    }
  }
  return totalDistance;
}
/* 隣接するノード間の距離を取得する関数 */
export const calcAdjacencyNodeDist = (node1: string, node2: string) => {
  /* node1は端点じゃない可能性が高い */
  const node1AdjacencyObj = adjacencyList[node1];
  //console.log("node1の隣接リスト" + JSON.stringify(node1AdjacencyObj))
  //console.log("node1: " + node1)
  //console.log("node2: "+node2);
  return node1AdjacencyObj.find((node) => (node.node_id == node2))!.distance;// 隣接ノードの距離を取得して返却
}