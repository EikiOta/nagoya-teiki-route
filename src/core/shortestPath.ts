// src\core\shortestPath.ts
import adjacencyList from "../data/adjacency_list.json";
// import { adjacencyList } from "../data/adjacencyList"; // ts ver
type stationInfo = {
  node_id: string;
  type: string;
  distance: number;
};
type Connection = { node_id: string; type: string };
export const findShortestPath = (
  startStationId: Connection,
  endStationId: string
): void => {
  const hoge = "H01";
  // console.log(startStationId);
  // console.log(adjacencyList.H06[1].node_id == startStationId);// true
  // console.log(adjacencyList["H10"]);
  console.log(adjacencyList[hoge]);
  console.log(adjacencyList[startStationId]);
};
