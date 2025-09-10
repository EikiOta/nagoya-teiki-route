// --- データをインポート ---
import stations from '../data/stations.json';
import adjacencyList from '../data/adjacency_list.json';
import lines from '../data/lines.json';

// --- これだけで、もうデータが使える状態です！ ---

// 例: ちゃんと読み込めているかコンソールで確認
console.log('名古屋駅の情報:', stations.H08);
console.log('名古屋駅の接続先:', adjacencyList.H08);
console.log('東山線の名前:', lines.H);