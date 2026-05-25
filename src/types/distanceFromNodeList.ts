export type DistanceFromNode = {
  id: string;
  distance: number; // 始点からの距離(デフォルトは999)
  isConfirmed: boolean; // true: 確定距離, false: 暫定距離
  previousNodeId: string | null; // 最短経路上の1つ前のノード
};

export type DistanceFromNodeList = DistanceFromNode[];

