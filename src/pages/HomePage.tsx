import Stations from "../data/stationNodes.ts";
import dijkstra from "../core/findShortestRoutes.ts";
import { useEffect, useState } from "react";
import convertFareSection from "../core/fareSection.ts";
import type { currentPathState } from "../types/currentPathState.ts";
import { routeCandidateFinder } from "../core/routeCandidateFinder.ts";
import { nodeIdToStationName } from "../utils/routeDisplay.ts";

export const HomePage = () => {
  const [route, setRoute] = useState<string[]>([]); // route保存 + 再描画
  const [firstSta, setFirstSta] = useState("");
  const [secondSta, setSecondSta] = useState("");
  const [fareSec, setFareSec] = useState(0);

  const [routeCandidates, setRouteCandidates] = useState<currentPathState[]>([]); // DFS(ルート候補)の結果状態管理

  const onSetFirstSta = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFirstSta(e.target.value);
    // handleDijkstra();// ドロップダウン変えるたびにダイクストラ
  };

  const onSetSecondSta = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSecondSta(e.target.value);
    // handleDijkstra();// ドロップダウン変えるたびにダイクストラ
  };

  const stations = Stations;

  useEffect(() => {
    if (firstSta !== "" && secondSta !== "") {
      const { route, distance } = dijkstra(firstSta, secondSta);
      const candidates = routeCandidateFinder(firstSta, secondSta);

      setRoute(route);
      setFareSec(convertFareSection(distance));
      setRouteCandidates(candidates); // DFS探索
    }
  }, [firstSta, secondSta]);

  return (
    <>
      <h2>名市交定期券ルートシミュレーション</h2>
      <p>必ず含める駅を2つ選択してください</p>

      <select onChange={(e) => onSetFirstSta(e)} value={firstSta}>
        <option disabled value="">
          1駅目を選択
        </option>

        {stations.map((station) => {
          return (
            <option
              key={station.id}
              value={station.id}
              disabled={station.id === secondSta}
            >
              {nodeIdToStationName(station.id)}
            </option>
          );
        })}
      </select>

      <select onChange={(e) => onSetSecondSta(e)} value={secondSta}>
        <option disabled value="">
          2駅目を選択
        </option>

        {stations.map((station) => {
          return (
            <option
              key={station.id}
              value={station.id}
              disabled={firstSta === station.id}
            >
              {nodeIdToStationName(station.id)}
            </option>
          );
        })}
      </select>

      {firstSta !== "" && secondSta !== "" && (
        <>
          <p className="section-title">最短ルート（ダイクストラ） </p>

          {route
            .map((nodeId) => {
              return nodeIdToStationName(nodeId);
            })
            .join(" → ")}

          <p className="section-title">最短区間  </p>
          <p>{fareSec} 区</p>

          <p className="section-title">
            定期券ルート候補（深さ優先探索）件数: {routeCandidates.length}
          </p>

          {routeCandidates.map((routeCandidate, index) => {
            return (
              <div key={index}>
                <p className="section-title">
                  候補{index + 1} (駅数: {routeCandidate.routeNodesIds.length}/
                  乗換: {routeCandidate.transferCount}回) : 
                </p>

                {routeCandidate.routeNodesIds
                  .map((nodeId) => {
                    return nodeIdToStationName(nodeId);
                  })
                  .join(" → ")}
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default HomePage;