export type DistanceFromNode = {
  id: string;
  distance: number; // 始点からの距離(デフォルトは999)
  isConfirmed: boolean; // true: 確定距離, false: 暫定距離
  previousNodeId: string | null; // 最短経路上の1つ前のノード
};

export type DistanceFromNodeList = DistanceFromNode[];

export const distanceFromNodeList: DistanceFromNodeList = [
  // 東山線
  { id: "H01", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H02", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H03", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H04", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H05", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H06", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H07", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H08", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H09", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H10", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H11", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H12", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H13", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H14", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H15", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H16", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H17", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H18", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H19", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H20", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H21", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "H22", distance: 999, isConfirmed: false, previousNodeId: null },

  // 名城線
  { id: "M01", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M02", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M03", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M04", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M05", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M06", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M07", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M08", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M09", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M10", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M11", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M12", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M13", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M14", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M15", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M16", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M17", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M18", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M19", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M20", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M21", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M22", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M23", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M24", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M25", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M26", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M27", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "M28", distance: 999, isConfirmed: false, previousNodeId: null },

  // 名港線
  { id: "E01", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "E02", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "E03", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "E04", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "E05", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "E06", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "E07", distance: 999, isConfirmed: false, previousNodeId: null },

  // 鶴舞線
  { id: "T01", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T02", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T03", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T04", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T05", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T06", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T07", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T08", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T09", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T10", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T11", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T12", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T13", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T14", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T15", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T16", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T17", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T18", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T19", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "T20", distance: 999, isConfirmed: false, previousNodeId: null },

  // 桜通線
  { id: "S01", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S02", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S03", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S04", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S05", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S06", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S07", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S08", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S09", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S10", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S11", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S12", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S13", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S14", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S15", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S16", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S17", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S18", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S19", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S20", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "S21", distance: 999, isConfirmed: false, previousNodeId: null },

  // 上飯田線
  { id: "K01", distance: 999, isConfirmed: false, previousNodeId: null },
  { id: "K02", distance: 999, isConfirmed: false, previousNodeId: null },
];

export default distanceFromNodeList;