// --- データをインポート ---
import stations from '../data/stations.json';
import adjacencyList from '../data/adjacency_list.json';
import lines from '../data/lines.json';

type Connection =  {node_id: string, type: string}; // 型自作(adjacency_list.jsonの型)


// ちゃんと読み込めているかコンソールで確認
// console.log('名古屋駅の情報:', stations.H08);
// console.log('名古屋駅の接続先:', adjacencyList.H08);
// console.log('東山線の名前:', lines.H);
// スタート駅ID: startNodeId, ゴール駅ID: endNodeId
export const findRoutes = function (startNodeId: string, endNodeId: string): string[][] {
    const results: string[][] = [];
    // 再帰(繰り返し)関数
    const findPathsRecursive = function(currentNodeId: string, currentPath: string[], visitedNodes: Set<string>) :void {
        // 今いる駅がゴール駅に到達した場合
        if(currentNodeId == endNodeId){
            const copiedCurrentPath : string[] = [...currentPath];// 現在のパスを一旦コピー配列にコピーする。（コピーしないと都度更新されてしまいまずい)
            results.push(copiedCurrentPath);// pushで結果に保存
        }
        const neighbors : Connection[] = (adjacencyList as Record<string, Connection[]>)[currentNodeId] ; // 現在いる駅の隣接するノードをneighborsに格納。as以下は型アサーションでtsエラー回避)



    };


    return results;
}