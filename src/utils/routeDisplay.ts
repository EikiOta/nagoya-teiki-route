/* 駅ナンバリング(ex: "H09")から駅名(駅ナンバリング) (ex: "伏見(H09))"に変換する関数 */
import stations from "../data/stationNodes"

export const nodeIdToStationName = (nodeId: string) => {
    const targetStation = stations.find((node) => node.id == nodeId);
    if(targetStation === undefined){
            return "UNKNOWN_ID(" + nodeId + ")";// 異常
    }
    const displayName: string = targetStation.name + "(" + nodeId + ")";
    return displayName;
}  