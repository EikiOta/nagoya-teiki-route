import Stations from "../data/stationNodes.ts";
import dijkstra from "../core/findShortestRoutes.ts";
import { useEffect, useState } from 'react';
import convertFareSection from "../core/fareSection.ts";
export const HomePage = () => {
    const [route, setRoute] = useState<string[]>([]);// route保存 + 再描画
    const [firstSta, setFirstSta] = useState("");
    const [secondSta, setSecondSta] = useState("");
    const [fareSec, setFareSec] = useState(0);

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
            //setRoute(dijkstra(firstSta, secondSta).route);
            const {route, distance} = dijkstra(firstSta, secondSta);
            /* 下記二つのroute, distanceは上記定義のstateのものとは違う */
            setRoute(route);
            console.log("距離" + distance);
            console.log("区間" + convertFareSection(distance));
            setFareSec(convertFareSection(distance));
            
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
        <p>ルート</p>
        {route}
        <p>最短区間</p>
        {fareSec}
    </>
  );
}
export default HomePage;