/* オブジェクトのプロパティに動的にアクセスする場合は[key: string]と記述が必須
Array<{}>はテクい。
*/
export interface AdjacencyList {
  [key: string]: Array<{
    node_id: string;
    type: string;
    distance: number;// kmではなくメートル表記
  }>;
}
export const adjacencyList: AdjacencyList = {
  H01: [{ node_id: "H02", type: "walk_line", distance: 900 }],
  H02: [
    { node_id: "H01", type: "walk_line", distance: 900 },
    { node_id: "H03", type: "walk_line", distance: 1100 },
  ],
  H03: [
    { node_id: "H02", type: "walk_line", distance: 1100 },
    { node_id: "H04", type: "walk_line", distance: 1100 },
  ],
  H04: [
    { node_id: "H03", type: "walk_line", distance: 1100 },
    { node_id: "H05", type: "walk_line", distance: 800 },
  ],
  H05: [
    { node_id: "H04", type: "walk_line", distance: 800 },
    { node_id: "H06", type: "walk_line", distance: 700 },
  ],
  H06: [
    { node_id: "H05", type: "walk_line", distance: 700 },
    { node_id: "H07", type: "walk_line", distance: 900 },
  ],
  H07: [
    { node_id: "H06", type: "walk_line", distance: 900 },
    { node_id: "H08", type: "walk_line", distance: 1100 },
  ],
  H08: [
    { node_id: "H07", type: "walk_line", distance: 1100 },
    { node_id: "H09", type: "walk_line", distance: 1400 },
    { node_id: "S02", type: "transfer", distance: 0 },
  ],
  H09: [
    { node_id: "H08", type: "walk_line", distance: 1400 },
    { node_id: "H10", type: "walk_line", distance: 1000 },
    { node_id: "T07", type: "transfer", distance: 0 },
  ],
  H10: [
    { node_id: "H09", type: "walk_line", distance: 1000 },
    { node_id: "H11", type: "walk_line", distance: 1100 },
    { node_id: "M05", type: "transfer", distance: 0 },
  ],
  H11: [
    { node_id: "H10", type: "walk_line", distance: 1100 },
    { node_id: "H12", type: "walk_line", distance: 900 },
  ],
  H12: [
    { node_id: "H11", type: "walk_line", distance: 900 },
    { node_id: "H13", type: "walk_line", distance: 700 },
  ],
  H13: [
    { node_id: "H12", type: "walk_line", distance: 700 },
    { node_id: "H14", type: "walk_line", distance: 900 },
    { node_id: "S08", type: "transfer", distance: 0 },
  ],
  H14: [
    { node_id: "H13", type: "walk_line", distance: 900 },
    { node_id: "H15", type: "walk_line", distance: 600 },
  ],
  H15: [
    { node_id: "H14", type: "walk_line", distance: 600 },
    { node_id: "H16", type: "walk_line", distance: 1000 },
  ],
  H16: [
    { node_id: "H15", type: "walk_line", distance: 1000 },
    { node_id: "H17", type: "walk_line", distance: 900 },
    { node_id: "M17", type: "transfer", distance: 0 },
  ],
  H17: [
    { node_id: "H16", type: "walk_line", distance: 900 },
    { node_id: "H18", type: "walk_line", distance: 1100 },
  ],
  H18: [
    { node_id: "H17", type: "walk_line", distance: 1100 },
    { node_id: "H19", type: "walk_line", distance: 1300 },
  ],
  H19: [
    { node_id: "H18", type: "walk_line", distance: 1300 },
    { node_id: "H20", type: "walk_line", distance: 1100 },
  ],
  H20: [
    { node_id: "H19", type: "walk_line", distance: 1100 },
    { node_id: "H21", type: "walk_line", distance: 700 },
  ],
  H21: [
    { node_id: "H20", type: "walk_line", distance: 700 },
    { node_id: "H22", type: "walk_line", distance: 1300 },
  ],
  H22: [{ node_id: "H21", type: "walk_line", distance: 1300 }],

  M01: [
    { node_id: "M28", type: "walk_line", distance: 1100 },
    { node_id: "M02", type: "walk_line", distance: 700 },
    { node_id: "E01", type: "transfer", distance: 0 },
  ],
  M02: [
    { node_id: "M01", type: "walk_line", distance: 700 },
    { node_id: "M03", type: "walk_line", distance: 900 },
  ],
  M03: [
    { node_id: "M02", type: "walk_line", distance: 900 },
    { node_id: "M04", type: "walk_line", distance: 700 },
    { node_id: "T09", type: "transfer", distance: 0 },
  ],
  M04: [
    { node_id: "M03", type: "walk_line", distance: 700 },
    { node_id: "M05", type: "walk_line", distance: 700 },
  ],
  M05: [
    { node_id: "M04", type: "walk_line", distance: 700 },
    { node_id: "M06", type: "walk_line", distance: 400 },
    { node_id: "H10", type: "transfer", distance: 0 },
  ],
  M06: [
    { node_id: "M05", type: "walk_line", distance: 400 },
    { node_id: "M07", type: "walk_line", distance: 900 },
    { node_id: "S05", type: "transfer", distance: 0 },
  ],
  M07: [
    { node_id: "M06", type: "walk_line", distance: 900 },
    { node_id: "M08", type: "walk_line", distance: 1100 },
  ],
  M08: [
    { node_id: "M07", type: "walk_line", distance: 1100 },
    { node_id: "M09", type: "walk_line", distance: 1000 },
  ],
  M09: [
    { node_id: "M08", type: "walk_line", distance: 1000 },
    { node_id: "M10", type: "walk_line", distance: 1000 },
  ],
  M10: [
    { node_id: "M09", type: "walk_line", distance: 1000 },
    { node_id: "M11", type: "walk_line", distance: 800 },
  ],
  M11: [
    { node_id: "M10", type: "walk_line", distance: 800 },
    { node_id: "M12", type: "walk_line", distance: 700 },
    { node_id: "K02", type: "transfer", distance: 0 },
  ],
  M12: [
    { node_id: "M11", type: "walk_line", distance: 700 },
    { node_id: "M13", type: "walk_line", distance: 800 },
  ],
  M13: [
    { node_id: "M12", type: "walk_line", distance: 800 },
    { node_id: "M14", type: "walk_line", distance: 900 },
  ],
  M14: [
    { node_id: "M13", type: "walk_line", distance: 900 },
    { node_id: "M15", type: "walk_line", distance: 900 },
  ],
  M15: [
    { node_id: "M14", type: "walk_line", distance: 900 },
    { node_id: "M16", type: "walk_line", distance: 1200 },
  ],
  M16: [
    { node_id: "M15", type: "walk_line", distance: 1200 },
    { node_id: "M17", type: "walk_line", distance: 1400 },
  ],
  M17: [
    { node_id: "M16", type: "walk_line", distance: 1400 },
    { node_id: "M18", type: "walk_line", distance: 1000 },
    { node_id: "H16", type: "transfer", distance: 0 },
  ],
  M18: [
    { node_id: "M17", type: "walk_line", distance: 1000 },
    { node_id: "M19", type: "walk_line", distance: 1100 },
  ],
  M19: [
    { node_id: "M18", type: "walk_line", distance: 1100 },
    { node_id: "M20", type: "walk_line", distance: 1000 },
  ],
  M20: [
    { node_id: "M19", type: "walk_line", distance: 1000 },
    { node_id: "M21", type: "walk_line", distance: 1300 },
    { node_id: "T15", type: "transfer", distance: 0 },
  ],
  M21: [
    { node_id: "M20", type: "walk_line", distance: 1300 },
    { node_id: "M22", type: "walk_line", distance: 1000 },
  ],
  M22: [
    { node_id: "M21", type: "walk_line", distance: 1000 },
    { node_id: "M23", type: "walk_line", distance: 1200 },
  ],
  M23: [
    { node_id: "M22", type: "walk_line", distance: 1200 },
    { node_id: "M24", type: "walk_line", distance: 700 },
    { node_id: "S14", type: "transfer", distance: 0 },
  ],
  M24: [
    { node_id: "M23", type: "walk_line", distance: 700 },
    { node_id: "M25", type: "walk_line", distance: 800 },
  ],
  M25: [
    { node_id: "M24", type: "walk_line", distance: 800 },
    { node_id: "M26", type: "walk_line", distance: 1200 },
  ],
  M26: [
    { node_id: "M25", type: "walk_line", distance: 1200 },
    { node_id: "M27", type: "walk_line", distance: 1000 },
  ],
  M27: [
    { node_id: "M26", type: "walk_line", distance: 1000 },
    { node_id: "M28", type: "walk_line", distance: 900 },
  ],
  M28: [
    { node_id: "M27", type: "walk_line", distance: 900 },
    { node_id: "M01", type: "walk_line", distance: 1100 },
  ],

  E01: [
    { node_id: "E02", type: "walk_line", distance: 1500 },
    { node_id: "M01", type: "transfer", distance: 0 },
  ],
  E02: [
    { node_id: "E01", type: "walk_line", distance: 1500 },
    { node_id: "E03", type: "walk_line", distance: 1100 },
  ],
  E03: [
    { node_id: "E02", type: "walk_line", distance: 1100 },
    { node_id: "E04", type: "walk_line", distance: 1200 },
  ],
  E04: [
    { node_id: "E03", type: "walk_line", distance: 1200 },
    { node_id: "E05", type: "walk_line", distance: 800 },
  ],
  E05: [
    { node_id: "E04", type: "walk_line", distance: 800 },
    { node_id: "E06", type: "walk_line", distance: 800 },
  ],
  E06: [
    { node_id: "E05", type: "walk_line", distance: 800 },
    { node_id: "E07", type: "walk_line", distance: 600 },
  ],
  E07: [{ node_id: "E06", type: "walk_line", distance: 600 }],

  T01: [{ node_id: "T02", type: "walk_line", distance: 1400 }],
  T02: [
    { node_id: "T01", type: "walk_line", distance: 1400 },
    { node_id: "T03", type: "walk_line", distance: 1300 },
  ],
  T03: [
    { node_id: "T02", type: "walk_line", distance: 1300 },
    { node_id: "T04", type: "walk_line", distance: 1400 },
  ],
  T04: [
    { node_id: "T03", type: "walk_line", distance: 1400 },
    { node_id: "T05", type: "walk_line", distance: 800 },
  ],
  T05: [
    { node_id: "T04", type: "walk_line", distance: 800 },
    { node_id: "T06", type: "walk_line", distance: 1400 },
  ],
  T06: [
    { node_id: "T05", type: "walk_line", distance: 1400 },
    { node_id: "T07", type: "walk_line", distance: 700 },
    { node_id: "S04", type: "transfer", distance: 0 },
  ],
  T07: [
    { node_id: "T06", type: "walk_line", distance: 700 },
    { node_id: "T08", type: "walk_line", distance: 800 },
    { node_id: "H09", type: "transfer", distance: 0 },
  ],
  T08: [
    { node_id: "T07", type: "walk_line", distance: 800 },
    { node_id: "T09", type: "walk_line", distance: 1000 },
  ],
  T09: [
    { node_id: "T08", type: "walk_line", distance: 1000 },
    { node_id: "T10", type: "walk_line", distance: 900 },
    { node_id: "M03", type: "transfer", distance: 0 },
  ],
  T10: [
    { node_id: "T09", type: "walk_line", distance: 900 },
    { node_id: "T11", type: "walk_line", distance: 1300 },
  ],
  T11: [
    { node_id: "T10", type: "walk_line", distance: 1300 },
    { node_id: "T12", type: "walk_line", distance: 900 },
  ],
  T12: [
    { node_id: "T11", type: "walk_line", distance: 900 },
    { node_id: "T13", type: "walk_line", distance: 1200 },
    { node_id: "S10", type: "transfer", distance: 0 },
  ],
  T13: [
    { node_id: "T12", type: "walk_line", distance: 1200 },
    { node_id: "T14", type: "walk_line", distance: 1000 },
  ],
  T14: [
    { node_id: "T13", type: "walk_line", distance: 1000 },
    { node_id: "T15", type: "walk_line", distance: 900 },
  ],
  T15: [
    { node_id: "T14", type: "walk_line", distance: 900 },
    { node_id: "T16", type: "walk_line", distance: 1400 },
    { node_id: "M20", type: "transfer", distance: 0 },
  ],
  T16: [
    { node_id: "T15", type: "walk_line", distance: 1400 },
    { node_id: "T17", type: "walk_line", distance: 1200 },
  ],
  T17: [
    { node_id: "T16", type: "walk_line", distance: 1200 },
    { node_id: "T18", type: "walk_line", distance: 800 },
  ],
  T18: [
    { node_id: "T17", type: "walk_line", distance: 800 },
    { node_id: "T19", type: "walk_line", distance: 900 },
  ],
  T19: [
    { node_id: "T18", type: "walk_line", distance: 900 },
    { node_id: "T20", type: "walk_line", distance: 1100 },
  ],
  T20: [{ node_id: "T19", type: "walk_line", distance: 1100 }],

  S01: [{ node_id: "S02", type: "walk_line", distance: 900 }],
  S02: [
    { node_id: "S01", type: "walk_line", distance: 900 },
    { node_id: "S03", type: "walk_line", distance: 700 },
    { node_id: "H08", type: "transfer", distance: 0 },
  ],
  S03: [
    { node_id: "S02", type: "walk_line", distance: 700 },
    { node_id: "S04", type: "walk_line", distance: 800 },
  ],
  S04: [
    { node_id: "S03", type: "walk_line", distance: 800 },
    { node_id: "S05", type: "walk_line", distance: 900 },
    { node_id: "T06", type: "transfer", distance: 0 },
  ],
  S05: [
    { node_id: "S04", type: "walk_line", distance: 900 },
    { node_id: "S06", type: "walk_line", distance: 700 },
    { node_id: "M06", type: "transfer", distance: 0 },
  ],
  S06: [
    { node_id: "S05", type: "walk_line", distance: 700 },
    { node_id: "S07", type: "walk_line", distance: 1300 },
  ],
  S07: [
    { node_id: "S06", type: "walk_line", distance: 1300 },
    { node_id: "S08", type: "walk_line", distance: 1000 },
  ],
  S08: [
    { node_id: "S07", type: "walk_line", distance: 1000 },
    { node_id: "S09", type: "walk_line", distance: 1100 },
    { node_id: "H13", type: "transfer", distance: 0 },
  ],
  S09: [
    { node_id: "S08", type: "walk_line", distance: 1100 },
    { node_id: "S10", type: "walk_line", distance: 1000 },
  ],
  S10: [
    { node_id: "S09", type: "walk_line", distance: 1000 },
    { node_id: "S11", type: "walk_line", distance: 1100 },
    { node_id: "T12", type: "transfer", distance: 0 },
  ],
  S11: [
    { node_id: "S10", type: "walk_line", distance: 1100 },
    { node_id: "S12", type: "walk_line", distance: 900 },
  ],
  S12: [
    { node_id: "S11", type: "walk_line", distance: 900 },
    { node_id: "S13", type: "walk_line", distance: 700 },
  ],
  S13: [
    { node_id: "S12", type: "walk_line", distance: 700 },
    { node_id: "S14", type: "walk_line", distance: 700 },
  ],
  S14: [
    { node_id: "S13", type: "walk_line", distance: 700 },
    { node_id: "S15", type: "walk_line", distance: 1100 },
    { node_id: "M23", type: "transfer", distance: 0 },
  ],
  S15: [
    { node_id: "S14", type: "walk_line", distance: 1100 },
    { node_id: "S16", type: "walk_line", distance: 900 },
  ],
  S16: [
    { node_id: "S15", type: "walk_line", distance: 900 },
    { node_id: "S17", type: "walk_line", distance: 1100 },
  ],
  S17: [
    { node_id: "S16", type: "walk_line", distance: 1100 },
    { node_id: "S18", type: "walk_line", distance: 1100 },
  ],
  S18: [
    { node_id: "S17", type: "walk_line", distance: 1100 },
    { node_id: "S19", type: "walk_line", distance: 900 },
  ],
  S19: [
    { node_id: "S18", type: "walk_line", distance: 900 },
    { node_id: "S20", type: "walk_line", distance: 1400 },
  ],
  S20: [
    { node_id: "S19", type: "walk_line", distance: 1400 },
    { node_id: "S21", type: "walk_line", distance: 800 },
  ],
  S21: [{ node_id: "S20", type: "walk_line", distance: 800 }],

  K01: [{ node_id: "K02", type: "walk_line", distance: 800 }],
  K02: [
    { node_id: "K01", type: "walk_line", distance: 800 },
    { node_id: "M11", type: "transfer", distance: 0 },
  ],
};
export default adjacencyList;