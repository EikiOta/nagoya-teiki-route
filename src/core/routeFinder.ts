// --- データをインポート ---
import stations from '../data/stations.json';
import adjacencyList from '../data/adjacency_list.json';
import lines from '../data/lines.json';

type Connection =  {node_id: string, type: string}; // 型自作(adjacency_list.jsonの型)
type StationInfo = {
    name: string;
    line_id: string;
    special_node_type?: string; // ? を付けてオプショナルにする
};



// console.log('名古屋駅の情報:', stations.H08);
// console.log('名古屋駅の接続先:', adjacencyList.H08);
// console.log('東山線の名前:', lines.H);
// スタート駅ID: startNodeId, ゴール駅ID: endNodeId
export const findRoutes = function (startNodeId: string, endNodeId: string): string[][] {
    const results: string[][] = [];
    // 再帰(繰り返し)関数
    // ゴール(endNodeId)は固定なので引数として渡さなくても参照できる。他方でスタート位置は都度変わる（再帰時の現在地によって）ため引数として渡す（変数化）する必要がある。
    // transferCount: 乗り換え回数(3回以下の縛り), specialStations: 「経路・接続号線を判別する駅（大曽根、金山など）の総数が5駅を超えない」縛り
    const findPathsRecursive = function(currentNodeId: string, currentPath: string[], visitedNodes: Set<string>, transferCount: number, specialStations: Set<string>) :void {
        // 今いる駅がゴール駅に到達した場合(到着のチェック)
        if(currentNodeId == endNodeId){
            const copiedCurrentPath : string[] = [...currentPath];// 現在のパスを一旦コピー配列にコピーする。（コピーしないと都度更新されてしまいまずい)
            results.push(copiedCurrentPath);// pushで結果に保存
        }
        // 非到着の場合
        const neighbors : Connection[] = (adjacencyList as Record<string, Connection[]>)[currentNodeId] ; // 現在いる駅の隣接するノードをneighborsに格納。as以下は型アサーションでtsエラー回避)
        for(const neighbor of neighbors){// 現在いる駅の隣接ノードを順番に全て回す
            /*選択中の隣接ノードが乗り換え(transfer)で、乗り換え回数が3回（上限に達している)の場合 */
            if(neighbor.type == "transfer" && transferCount == 3){
                continue;// これ以上乗り換えできないためスキップする
            }
            if(visitedNodes.has(neighbor.node_id)){// visitedNodesにneighbor.node_idがある（つまり既に訪れていた場合)
                continue;// スキップ
            }

            // 型アサーションを追加
            const stationInfo : StationInfo | undefined = (stations as Record<string, StationInfo>)[neighbor.node_id];

            // 以下まだ訪れていない場合
            const copiedCurrentPath : string[] = [...currentPath];// 現在のパスを一旦コピー配列にコピーする。（コピーしないと都度更新されてしまいまずい)
            copiedCurrentPath.push(neighbor.node_id);// neighbor.node_idは訪れていない判定されたので、これをコピーした配列にpushする 

            const copiedVisitedNodes = new Set(visitedNodes);// 現在の訪れたリスト配列をコピーする
            copiedVisitedNodes.add(neighbor.node_id);// 今持っているneighbor.node_idは訪れた扱いになるので、コピーした訪れたリスト配列に追加
            let newTransferCount : number = transferCount;// プリミティブ型は代入でも値渡しなので、互いに紐づけされない。
            /* 乗り換えノードの場合は、乗り換え扱いとしてインクリメント */
            if(neighbor.type == "transfer"){
                newTransferCount++;// インクリメント
            }

            const newSpecialStations = new Set(specialStations); // コピー

            /* ノードが特定の5駅(大曽根、金山、西高蔵、国際センター、吹上)の場合(=special_node_typeを持っている) */
            if(stationInfo && stationInfo.special_node_type){
                newSpecialStations.add(stationInfo.special_node_type) // 特定駅リストに加える。これは引き継がれる
            }
            /* 次の乗り換え回数 + 次の特定5駅の通過数が5を超える場合。 */
            if(newTransferCount + newSpecialStations.size > 5){
                continue;// スキップ
            }
            findPathsRecursive(neighbor.node_id, copiedCurrentPath, copiedVisitedNodes, newTransferCount, newSpecialStations);// 再帰呼び出し
        }


    };
    // 最初の呼び出し
    // currentNodeId: 最初の位置(startNodeId), currentPath: 最初の位置しか訪れていないので配列化した[startNodeId], visitedNodes: 同じく最初のノードしか訪れていないのでnew Setで[startNodeId]だけ格納
    // transferCount: 初期は当然累計乗り換え回数0回
    findPathsRecursive(startNodeId, [startNodeId], new Set([startNodeId]), 0, new Set([]));
    return results;
}