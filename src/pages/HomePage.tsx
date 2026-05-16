import Stations from "../data/stationNodes.ts";
import dijkstra from "../core/findShortestRoutes.ts";
import { useEffect, useState } from 'react';

export const HomePage = () => {
    const [route, setRoute] = useState<string[]>([]);// route保存 + 再描画
    const [firstSta, setFirstSta] = useState("");
    const [secondSta, setSecondSta] = useState("");

    const onSetFirstSta = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFirstSta(e.target.value);
        //handleDijkstra();// ドロップダウン変えるたびにダイクストラ
    }
    const onSetSecondSta = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSecondSta(e.target.value);
        //handleDijkstra();// ドロップダウン変えるたびにダイクストラ

    }
    const stations = Stations;
    useEffect(() => {

        if(firstSta !== "" && secondSta !== ""){
            setRoute(dijkstra(firstSta, secondSta).route);
        }
    }, [firstSta, secondSta])
  return (
    <>
        <p>必ず含める駅を2つ選択してください</p>
        <select onChange={(e) => onSetFirstSta(e)} value={firstSta}>
            <option disabled value = "" >1駅目を選択</option>
        {stations.map((station) => {
          return <option key={station.id} value={station.id} disabled={station.id==secondSta ? true : false}>{station.name}</option>;
        })}
        </select>
        <select onChange={(e) => onSetSecondSta(e)} value={secondSta}>
            <option disabled value = "">2駅目を選択</option>
        {stations.map((station) => {
          return <option key={station.id} value={station.id} disabled={firstSta==station.id ? true : false}>{station.name}</option>;
        })}
        </select>
        {route}
    </>
  );
}
export default HomePage;