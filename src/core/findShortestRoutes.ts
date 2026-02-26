import adjacencyList from "../data/adjacencyList";
export const findShortestRoutes = function (
  startNodeId: string,
  endNodeId: string
): void {
  //const fuga: keyof AdjacencyList = startNodeId;
  // console.log(adjacencyList[hoge]);
  console.log(adjacencyList[startNodeId]);
  // console.log(adjacencyList[startNodeId]);
  //console.log(foo[startNodeId]);
  console.log(adjacencyList[startNodeId][0].type)
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
  const slicedNodeId: string = nodeId.slice(1);
  const intNodeId: number = Number(slicedNodeId);
  return intNodeId;
}
// ダイクストラ法による最短ルート算出
// export const getShortestPath = (startNodeId: string, endNodeId: string): string[] => {
//   const targetNodeId: string = startNodeId;// "H05"
//   const tempDistance;// [nodeId][distance]
//   const confirmedDistance = [startNodeId][0];// [nodeId][distance]
  
//   //confirmedDistance.push([startNodeId][0]);
//   while(targetNodeId != endNodeId){
//     const nextNodeArr: string[] = getNextNode(targetNodeId);// [H04, H06]
//     for(const node of nextNodeArr){
//       tempDistance.push([node][])
//     }
//   }


// }

// 配列に格納されたルートから方向を判定する(隣のノード比較して方向確定)
export const isForwardDirByArr = (pathArr: string[]): boolean => {
  const startNodeId = stringNodeToIntNode(pathArr[0]);// 5
  const nextNodeId = stringNodeToIntNode(pathArr[1]);// 6
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
  const isForward: boolean = isForwardDirByArr(pathArr);// 順方向 -> true, 逆方向 -> false
  let totalDistance: number = 0;

  for(let i = 0; i < pathArr.length - 1;i++){
    /* 乗り換え判定 */
    if(isTransferNextNode(pathArr[i], pathArr[i + 1])){
      continue;// 乗り換えは距離発生しないのでスキップ
    }
    const nowNodeId :string = pathArr[i];//"H05"
    /* 順方向 */
    if(isForward){
      totalDistance += adjacencyList[nowNodeId][1].distance ?? 0;// デフォルト値0
    }
  }
  return totalDistance;
}