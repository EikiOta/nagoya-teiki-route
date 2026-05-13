import Stations from "../data/stationNodes.ts";
import dijkstra from "../core/findShortestRoutes.ts";
import { useState } from 'react';

export const HomePage = () => {
    const [route, setRoute] = useState<string[]>([]);// route保存 + 再描画
    const [firstSta, setFirstSta] = useState("");
    const [secondSta, setSecondSta] = useState("");
    const handleDijkstra = () => {
        console.log("最初駅: " + firstSta)
        setRoute(dijkstra(firstSta, secondSta).route);

    }
    const onSetFirstSta = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFirstSta(e.target.value);
    }
    const onSetSecondSta = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSecondSta(e.target.value);
    }


    const stations = Stations;
  return (
    <>
        <p>必ず含める駅を2つ選択してください</p>
        <select onChange={(e) => onSetFirstSta(e)}>
            <option>1駅目を選択</option>
        {stations.map((station) => {
          return <option key={station.id} value={station.id}>{station.name}</option>;
        })}
        </select>
        <select onChange={(e) => onSetSecondSta(e)}>
            <option>2駅目を選択</option>
        {stations.map((station) => {
          return <option key={station.id} value={station.id}>{station.name}</option>;
        })}
        </select>
        <button type="button" onClick={() => handleDijkstra()}>検索</button>
        {route}
    </>
  );
}
export default HomePage;