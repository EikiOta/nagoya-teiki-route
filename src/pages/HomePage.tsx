import Stations from "../data/stationNodes.ts";
import dijkstra from "../core/findShortestRoutes.ts";
import { useEffect, useState } from "react";
import convertFareSection from "../core/fareSection.ts";
import type { currentPathState } from "../types/currentPathState.ts";
import { routeCandidateFinder } from "../core/routeCandidateFinder.ts";
import { nodeIdToStationName } from "../utils/routeDisplay.ts";
import fareSections from "../core/fareSectionRules.ts";

export const HomePage = () => {
  const [route, setRoute] = useState<string[]>([]); // route保存 + 再描画
  const [firstSta, setFirstSta] = useState("");
  const [secondSta, setSecondSta] = useState("");
  const [fareSec, setFareSec] = useState(0);
  const [userSec, setUserSec] = useState(fareSec);// ユーザの選択する許容区間
  const [isSearched, setIsSearched] = useState(false);

  const [routeCandidates, setRouteCandidates] = useState<currentPathState[]>([]); // DFS(ルート候補)の結果状態管理

  const onSetFirstSta = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFirstSta(e.target.value);
  };

  const onSetSecondSta = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSecondSta(e.target.value);
  };
  const onSetUserSec = (e: React.ChangeEvent<HTMLSelectElement>) => {

    setUserSec(+e.target.value);// "+"は単項プラス演算子(文字列 -> 数値に変換)
  }
  /* 検索ボタン押下 -> DFS実行して候補ルート描画する */
  const handleClick = () => {
    /* 1段階目DFS実行(必須駅２点間の核ルートを算出) */
    const candidates = routeCandidateFinder(firstSta, secondSta, userSec);// userSecはユーザが指定した許容区間

    setRouteCandidates(candidates);
    /* 2段階目DFS実行(核ルートを格納したcandidatesに対して、DFSを実行して拡張する) */

    setIsSearched(true);// 検索結果描画用
  }

  const stations = Stations;
  /* ドロップダウン変更で最短区間を即更新 */
  useEffect(() => {
    if (firstSta !== "" && secondSta !== "") {
      const { route, distance } = dijkstra(firstSta, secondSta);

      setRoute(route);
      setFareSec(convertFareSection(distance));
      //setRouteCandidates(candidates); // DFS探索
      
    }
  }, [firstSta, secondSta]);
  useEffect(() => {
    /* ユーザの指定区間が最短区間を下回った時のみ切り替える */
    if(fareSec > userSec){
        setUserSec(fareSec);// 最短区間に更新
    }
  }, [fareSec]);// ダイクストラの最短区間が変わったら実行
  useEffect(() => {
    setIsSearched(false); // 条件が1つでも変更されたらDFS結果は非表示にする
  }, [userSec, firstSta, secondSta]);



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
            
        

      <select onChange={(e) => onSetUserSec(e)} value={userSec}>
        <option disabled value="">
          許容できる最大区間を選択
        </option>

        {fareSections.map((fareSection) => {
          return (
            <option
              key={fareSection.sectionNum}
              value={fareSection.sectionNum}
              disabled={fareSection.sectionNum < fareSec}
            >
              {fareSection.sectionNum}
            </option>
          );
        })}
      </select>
      <button onClick={handleClick}>候補検索</button>
      </>
    )}
      {isSearched && (
            <>
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