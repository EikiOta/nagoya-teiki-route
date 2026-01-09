/* オブジェクトのプロパティに動的にアクセスする場合は[key: string]と記述が必須
Array<{}>はテクい。
*/
export interface AdjacencyList {
  [key: string]: Array<{
    node_id: string;
    type: string;
    distance?: number;
  }>;
}
export const adjacencyList: AdjacencyList = {
  H01: [{ node_id: "H02", type: "walk_line", distance: 0.9 }],
  H02: [
    { node_id: "H01", type: "walk_line", distance: 0.9 },
    { node_id: "H03", type: "walk_line", distance: 1.1 },
  ],
  H03: [
    { node_id: "H02", type: "walk_line", distance: 1.1 },
    { node_id: "H04", type: "walk_line", distance: 0.9 },
  ],
  H04: [
    { node_id: "H03", type: "walk_line", distance: 0.9 },
    { node_id: "H05", type: "walk_line", distance: 0.8 },
  ],
  H05: [
    { node_id: "H04", type: "walk_line", distance: 0.8 },
    { node_id: "H06", type: "walk_line", distance: 0.9 },
  ],
  H06: [
    { node_id: "H05", type: "walk_line", distance: 0.9 },
    { node_id: "H07", type: "walk_line", distance: 1.0 },
  ],
  H07: [
    { node_id: "H06", type: "walk_line", distance: 1.0 },
    { node_id: "H08", type: "walk_line", distance: 1.1 },
  ],
  H08: [
    { node_id: "H07", type: "walk_line", distance: 1.1 },
    { node_id: "H09", type: "walk_line", distance: 1.4 },
    { node_id: "S02", type: "transfer" },
  ],
  H09: [
    { node_id: "H08", type: "walk_line", distance: 1.4 },
    { node_id: "H10", type: "walk_line", distance: 0.8 },
    { node_id: "T07", type: "transfer" },
  ],
  H10: [
    { node_id: "H09", type: "walk_line", distance: 0.8 },
    { node_id: "H11", type: "walk_line", distance: 1.1 },
    { node_id: "M05", type: "transfer" },
  ],
  H11: [
    { node_id: "H10", type: "walk_line", distance: 1.1 },
    { node_id: "H12", type: "walk_line", distance: 0.9 },
  ],
  H12: [
    { node_id: "H11", type: "walk_line", distance: 0.9 },
    { node_id: "H13", type: "walk_line", distance: 0.7 },
  ],
  H13: [
    { node_id: "H12", type: "walk_line", distance: 0.7 },
    { node_id: "H14", type: "walk_line", distance: 0.7 },
    { node_id: "S08", type: "transfer" },
  ],
  H14: [
    { node_id: "H13", type: "walk_line", distance: 0.7 },
    { node_id: "H15", type: "walk_line", distance: 1.0 },
  ],
  H15: [
    { node_id: "H14", type: "walk_line", distance: 1.0 },
    { node_id: "H16", type: "walk_line", distance: 0.9 },
  ],
  H16: [
    { node_id: "H15", type: "walk_line", distance: 0.9 },
    { node_id: "H17", type: "walk_line", distance: 0.9 },
    { node_id: "M17", type: "transfer" },
  ],
  H17: [
    { node_id: "H16", type: "walk_line", distance: 0.9 },
    { node_id: "H18", type: "walk_line", distance: 1.1 },
  ],
  H18: [
    { node_id: "H17", type: "walk_line", distance: 1.1 },
    { node_id: "H19", type: "walk_line", distance: 1.1 },
  ],
  H19: [
    { node_id: "H18", type: "walk_line", distance: 1.1 },
    { node_id: "H20", type: "walk_line", distance: 0.7 },
  ],
  H20: [
    { node_id: "H19", type: "walk_line", distance: 0.7 },
    { node_id: "H21", type: "walk_line", distance: 1.0 },
  ],
  H21: [
    { node_id: "H20", type: "walk_line", distance: 1.0 },
    { node_id: "H22", type: "walk_line", distance: 1.3 },
  ],
  H22: [{ node_id: "H21", type: "walk_line", distance: 1.3 }],

  M01: [
    { node_id: "M28", type: "walk_line", distance: 1.0 },
    { node_id: "M02", type: "walk_line", distance: 0.7 },
    { node_id: "E01", type: "transfer" },
  ],
  M02: [
    { node_id: "M01", type: "walk_line", distance: 0.7 },
    { node_id: "M03", type: "walk_line", distance: 0.9 },
  ],
  M03: [
    { node_id: "M02", type: "walk_line", distance: 0.9 },
    { node_id: "M04", type: "walk_line", distance: 0.7 },
    { node_id: "T09", type: "transfer" },
  ],
  M04: [
    { node_id: "M03", type: "walk_line", distance: 0.7 },
    { node_id: "M05", type: "walk_line", distance: 0.7 },
  ],
  M05: [
    { node_id: "M04", type: "walk_line", distance: 0.7 },
    { node_id: "M06", type: "walk_line", distance: 0.4 },
    { node_id: "H10", type: "transfer" },
  ],
  M06: [
    { node_id: "M05", type: "walk_line", distance: 0.4 },
    { node_id: "M07", type: "walk_line", distance: 0.9 },
    { node_id: "S05", type: "transfer" },
  ],
  M07: [
    { node_id: "M06", type: "walk_line", distance: 0.9 },
    { node_id: "M08", type: "walk_line", distance: 1.0 },
  ],
  M08: [
    { node_id: "M07", type: "walk_line", distance: 1.0 },
    { node_id: "M09", type: "walk_line", distance: 1.2 },
  ],
  M09: [
    { node_id: "M08", type: "walk_line", distance: 1.2 },
    { node_id: "M10", type: "walk_line", distance: 1.0 },
  ],
  M10: [
    { node_id: "M09", type: "walk_line", distance: 1.0 },
    { node_id: "M11", type: "walk_line", distance: 0.8 },
  ],
  M11: [
    { node_id: "M10", type: "walk_line", distance: 0.8 },
    { node_id: "M12", type: "walk_line", distance: 0.7 },
    { node_id: "K02", type: "transfer" },
  ],
  M12: [
    { node_id: "M11", type: "walk_line", distance: 0.7 },
    { node_id: "M13", type: "walk_line", distance: 0.8 },
  ],
  M13: [
    { node_id: "M12", type: "walk_line", distance: 0.8 },
    { node_id: "M14", type: "walk_line", distance: 0.9 },
  ],
  M14: [
    { node_id: "M13", type: "walk_line", distance: 0.9 },
    { node_id: "M15", type: "walk_line", distance: 0.9 },
  ],
  M15: [
    { node_id: "M14", type: "walk_line", distance: 0.9 },
    { node_id: "M16", type: "walk_line", distance: 1.3 },
  ],
  M16: [
    { node_id: "M15", type: "walk_line", distance: 1.3 },
    { node_id: "M17", type: "walk_line", distance: 1.1 },
  ],
  M17: [
    { node_id: "M16", type: "walk_line", distance: 1.1 },
    { node_id: "M18", type: "walk_line", distance: 0.9 },
    { node_id: "H16", type: "transfer" },
  ],
  M18: [
    { node_id: "M17", type: "walk_line", distance: 0.9 },
    { node_id: "M19", type: "walk_line", distance: 1.0 },
  ],
  M19: [
    { node_id: "M18", type: "walk_line", distance: 1.0 },
    { node_id: "M20", type: "walk_line", distance: 0.9 },
  ],
  M20: [
    { node_id: "M19", type: "walk_line", distance: 0.9 },
    { node_id: "M21", type: "walk_line", distance: 1.2 },
    { node_id: "T15", type: "transfer" },
  ],
  M21: [
    { node_id: "M20", type: "walk_line", distance: 1.2 },
    { node_id: "M22", type: "walk_line", distance: 0.7 },
  ],
  M22: [
    { node_id: "M21", type: "walk_line", distance: 0.7 },
    { node_id: "M23", type: "walk_line", distance: 1.0 },
  ],
  M23: [
    { node_id: "M22", type: "walk_line", distance: 1.0 },
    { node_id: "M24", type: "walk_line", distance: 0.8 },
    { node_id: "S14", type: "transfer" },
  ],
  M24: [
    { node_id: "M23", type: "walk_line", distance: 0.8 },
    { node_id: "M25", type: "walk_line", distance: 0.7 },
  ],
  M25: [
    { node_id: "M24", type: "walk_line", distance: 0.7 },
    { node_id: "M26", type: "walk_line", distance: 1.2 },
  ],
  M26: [
    { node_id: "M25", type: "walk_line", distance: 1.2 },
    { node_id: "M27", type: "walk_line", distance: 1.0 },
  ],
  M27: [
    { node_id: "M26", type: "walk_line", distance: 1.0 },
    { node_id: "M28", type: "walk_line", distance: 0.8 },
  ],
  M28: [
    { node_id: "M27", type: "walk_line", distance: 0.8 },
    { node_id: "M01", type: "walk_line", distance: 1.0 },
  ],

  E01: [
    { node_id: "E02", type: "walk_line", distance: 1.5 },
    { node_id: "M01", type: "transfer" },
  ],
  E02: [
    { node_id: "E01", type: "walk_line", distance: 1.5 },
    { node_id: "E03", type: "walk_line", distance: 1.1 },
  ],
  E03: [
    { node_id: "E02", type: "walk_line", distance: 1.1 },
    { node_id: "E04", type: "walk_line", distance: 0.8 },
  ],
  E04: [
    { node_id: "E03", type: "walk_line", distance: 0.8 },
    { node_id: "E05", type: "walk_line", distance: 1.0 },
  ],
  E05: [
    { node_id: "E04", type: "walk_line", distance: 1.0 },
    { node_id: "E06", type: "walk_line", distance: 0.8 },
  ],
  E06: [
    { node_id: "E05", type: "walk_line", distance: 0.8 },
    { node_id: "E07", type: "walk_line", distance: 0.9 },
  ],
  E07: [{ node_id: "E06", type: "walk_line", distance: 0.9 }],

  T01: [{ node_id: "T02", type: "walk_line", distance: 1.4 }],
  T02: [
    { node_id: "T01", type: "walk_line", distance: 1.4 },
    { node_id: "T03", type: "walk_line", distance: 1.3 },
  ],
  T03: [
    { node_id: "T02", type: "walk_line", distance: 1.3 },
    { node_id: "T04", type: "walk_line", distance: 0.9 },
  ],
  T04: [
    { node_id: "T03", type: "walk_line", distance: 0.9 },
    { node_id: "T05", type: "walk_line", distance: 0.9 },
  ],
  T05: [
    { node_id: "T04", type: "walk_line", distance: 0.9 },
    { node_id: "T06", type: "walk_line", distance: 1.3 },
  ],
  T06: [
    { node_id: "T05", type: "walk_line", distance: 1.3 },
    { node_id: "T07", type: "walk_line", distance: 0.7 },
    { node_id: "S04", type: "transfer" },
  ],
  T07: [
    { node_id: "T06", type: "walk_line", distance: 0.7 },
    { node_id: "T08", type: "walk_line", distance: 0.8 },
    { node_id: "H09", type: "transfer" },
  ],
  T08: [
    { node_id: "T07", type: "walk_line", distance: 0.8 },
    { node_id: "T09", type: "walk_line", distance: 0.8 },
  ],
  T09: [
    { node_id: "T08", type: "walk_line", distance: 0.8 },
    { node_id: "T10", type: "walk_line", distance: 0.9 },
    { node_id: "M03", type: "transfer" },
  ],
  T10: [
    { node_id: "T09", type: "walk_line", distance: 0.9 },
    { node_id: "T11", type: "walk_line", distance: 1.3 },
  ],
  T11: [
    { node_id: "T10", type: "walk_line", distance: 1.3 },
    { node_id: "T12", type: "walk_line", distance: 0.9 },
  ],
  T12: [
    { node_id: "T11", type: "walk_line", distance: 0.9 },
    { node_id: "T13", type: "walk_line", distance: 1.2 },
    { node_id: "S10", type: "transfer" },
  ],
  T13: [
    { node_id: "T12", type: "walk_line", distance: 1.2 },
    { node_id: "T14", type: "walk_line", distance: 1.0 },
  ],
  T14: [
    { node_id: "T13", type: "walk_line", distance: 1.0 },
    { node_id: "T15", type: "walk_line", distance: 1.1 },
  ],
  T15: [
    { node_id: "T14", type: "walk_line", distance: 1.1 },
    { node_id: "T16", type: "walk_line", distance: 1.5 },
    { node_id: "M20", type: "transfer" },
  ],
  T16: [
    { node_id: "T15", type: "walk_line", distance: 1.5 },
    { node_id: "T17", type: "walk_line", distance: 1.2 },
  ],
  T17: [
    { node_id: "T16", type: "walk_line", distance: 1.2 },
    { node_id: "T18", type: "walk_line", distance: 0.9 },
  ],
  T18: [
    { node_id: "T17", type: "walk_line", distance: 0.9 },
    { node_id: "T19", type: "walk_line", distance: 0.9 },
  ],
  T19: [
    { node_id: "T18", type: "walk_line", distance: 0.9 },
    { node_id: "T20", type: "walk_line", distance: 1.3 },
  ],
  T20: [{ node_id: "T19", type: "walk_line", distance: 1.3 }],

  S01: [{ node_id: "S02", type: "walk_line", distance: 0.9 }],
  S02: [
    { node_id: "S01", type: "walk_line", distance: 0.9 },
    { node_id: "S03", type: "walk_line", distance: 0.7 },
    { node_id: "H08", type: "transfer" },
  ],
  S03: [
    { node_id: "S02", type: "walk_line", distance: 0.7 },
    { node_id: "S04", type: "walk_line", distance: 0.9 },
  ],
  S04: [
    { node_id: "S03", type: "walk_line", distance: 0.9 },
    { node_id: "S05", type: "walk_line", distance: 0.7 },
    { node_id: "T06", type: "transfer" },
  ],
  S05: [
    { node_id: "S04", type: "walk_line", distance: 0.7 },
    { node_id: "S06", type: "walk_line", distance: 0.5 },
    { node_id: "M06", type: "transfer" },
  ],
  S06: [
    { node_id: "S05", type: "walk_line", distance: 0.5 },
    { node_id: "S07", type: "walk_line", distance: 1.4 },
  ],
  S07: [
    { node_id: "S06", type: "walk_line", distance: 1.4 },
    { node_id: "S08", type: "walk_line", distance: 1.0 },
  ],
  S08: [
    { node_id: "S07", type: "walk_line", distance: 1.0 },
    { node_id: "S09", type: "walk_line", distance: 1.0 },
    { node_id: "H13", type: "transfer" },
  ],
  S09: [
    { node_id: "S08", type: "walk_line", distance: 1.0 },
    { node_id: "S10", type: "walk_line", distance: 1.0 },
  ],
  S10: [
    { node_id: "S09", type: "walk_line", distance: 1.0 },
    { node_id: "S11", type: "walk_line", distance: 0.9 },
    { node_id: "T12", type: "transfer" },
  ],
  S11: [
    { node_id: "S10", type: "walk_line", distance: 0.9 },
    { node_id: "S12", type: "walk_line", distance: 1.2 },
  ],
  S12: [
    { node_id: "S11", type: "walk_line", distance: 1.2 },
    { node_id: "S13", type: "walk_line", distance: 0.7 },
  ],
  S13: [
    { node_id: "S12", type: "walk_line", distance: 0.7 },
    { node_id: "S14", type: "walk_line", distance: 1.0 },
  ],
  S14: [
    { node_id: "S13", type: "walk_line", distance: 1.0 },
    { node_id: "S15", type: "walk_line", distance: 1.0 },
    { node_id: "M23", type: "transfer" },
  ],
  S15: [
    { node_id: "S14", type: "walk_line", distance: 1.0 },
    { node_id: "S16", type: "walk_line", distance: 0.8 },
  ],
  S16: [
    { node_id: "S15", type: "walk_line", distance: 0.8 },
    { node_id: "S17", type: "walk_line", distance: 1.0 },
  ],
  S17: [
    { node_id: "S16", type: "walk_line", distance: 1.0 },
    { node_id: "S18", type: "walk_line", distance: 1.2 },
  ],
  S18: [
    { node_id: "S17", type: "walk_line", distance: 1.2 },
    { node_id: "S19", type: "walk_line", distance: 0.9 },
  ],
  S19: [
    { node_id: "S18", type: "walk_line", distance: 0.9 },
    { node_id: "S20", type: "walk_line", distance: 1.3 },
  ],
  S20: [
    { node_id: "S19", type: "walk_line", distance: 1.3 },
    { node_id: "S21", type: "walk_line", distance: 1.1 },
  ],
  S21: [{ node_id: "S20", type: "walk_line", distance: 1.1 }],

  K01: [{ node_id: "K02", type: "walk_line", distance: 0.8 }],
  K02: [
    { node_id: "K01", type: "walk_line", distance: 0.8 },
    { node_id: "M11", type: "transfer" },
  ],
};
export default adjacencyList;
