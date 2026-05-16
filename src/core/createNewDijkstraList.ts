/* ダイクストラで使うdistanceFromNodeListを各マスタから新規作成する関数 */
import stations from "../data/stationNodes"
import type {DistanceFromNodeList} from "../types/distanceFromNodeList";
export const createNewDijkstraList = () => {
    const nodeStateList: DistanceFromNodeList = stations.map((station) => {
        return {id: station.id, distance: Infinity, isConfirmed: false, previousNodeId: null};
    } )
    console.log(nodeStateList);
    return nodeStateList;
}
export default createNewDijkstraList;