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
/* 隣接ノードを取得(乗り換えは除外) */
export const getNextNode = (nodeId: string):string[] =>  {
  const nextNodeArr: string[] = [];
  const arrLen: number = adjacencyList[nodeId].length;
  for(let i:number = 0;i < arrLen;i++){
    /* 乗り換えは除外 */
    if(adjacencyList[nodeId][i].type == "transfer"){
      break;
    }
    nextNodeArr.push(adjacencyList[nodeId][i].node_id);
  }
  return nextNodeArr;
};
/* 乗り換えを除いた一直線の経路を配列で返す(ただし先頭が末端の場合) */
export const getLinerPath = (startNodeId: string, endNodeId: string):string[] => {
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