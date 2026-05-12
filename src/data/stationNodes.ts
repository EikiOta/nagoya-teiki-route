export type LineId = "H" | "M" | "E" | "T" | "S" | "K";

export type SpecialNodeType =
  | "KANAYAMA"
  | "OZONE"
  | "NISHITAKAKURA"
  | "KOKUSAI"
  | "FUKIAGE";

export interface Station {
  id: string;
  name: string;
  line_id: LineId;
  special_node_type?: SpecialNodeType;
}

export const stations: Station[] = [
  { id: "H01", name: "高畑", line_id: "H" },
  { id: "H02", name: "八田", line_id: "H" },
  { id: "H03", name: "岩塚", line_id: "H" },
  { id: "H04", name: "中村公園", line_id: "H" },
  { id: "H05", name: "中村日赤", line_id: "H" },
  { id: "H06", name: "本陣", line_id: "H" },
  { id: "H07", name: "亀島", line_id: "H" },
  { id: "H08", name: "名古屋", line_id: "H" },
  { id: "H09", name: "伏見", line_id: "H" },
  { id: "H10", name: "栄", line_id: "H" },
  { id: "H11", name: "新栄町", line_id: "H" },
  { id: "H12", name: "千種", line_id: "H" },
  { id: "H13", name: "今池", line_id: "H" },
  { id: "H14", name: "池下", line_id: "H" },
  { id: "H15", name: "覚王山", line_id: "H" },
  { id: "H16", name: "本山", line_id: "H" },
  { id: "H17", name: "東山公園", line_id: "H" },
  { id: "H18", name: "星ヶ丘", line_id: "H" },
  { id: "H19", name: "一社", line_id: "H" },
  { id: "H20", name: "上社", line_id: "H" },
  { id: "H21", name: "本郷", line_id: "H" },
  { id: "H22", name: "藤が丘", line_id: "H" },

  {
    id: "M01",
    name: "金山",
    line_id: "M",
    special_node_type: "KANAYAMA",
  },
  { id: "M02", name: "東別院", line_id: "M" },
  { id: "M03", name: "上前津", line_id: "M" },
  { id: "M04", name: "矢場町", line_id: "M" },
  { id: "M05", name: "栄", line_id: "M" },
  { id: "M06", name: "久屋大通", line_id: "M" },
  { id: "M07", name: "名古屋城", line_id: "M" },
  { id: "M08", name: "名城公園", line_id: "M" },
  { id: "M09", name: "黒川", line_id: "M" },
  { id: "M10", name: "志賀本通", line_id: "M" },
  { id: "M11", name: "平安通", line_id: "M" },
  {
    id: "M12",
    name: "大曽根",
    line_id: "M",
    special_node_type: "OZONE",
  },
  { id: "M13", name: "ナゴヤドーム前矢田", line_id: "M" },
  { id: "M14", name: "砂田橋", line_id: "M" },
  { id: "M15", name: "茶屋ヶ坂", line_id: "M" },
  { id: "M16", name: "自由ヶ丘", line_id: "M" },
  { id: "M17", name: "本山", line_id: "M" },
  { id: "M18", name: "名古屋大学", line_id: "M" },
  { id: "M19", name: "八事日赤", line_id: "M" },
  { id: "M20", name: "八事", line_id: "M" },
  { id: "M21", name: "総合リハビリセンター", line_id: "M" },
  { id: "M22", name: "瑞穂運動場東", line_id: "M" },
  { id: "M23", name: "新瑞橋", line_id: "M" },
  { id: "M24", name: "妙音通", line_id: "M" },
  { id: "M25", name: "堀田", line_id: "M" },
  { id: "M26", name: "熱田神宮伝馬町", line_id: "M" },
  { id: "M27", name: "熱田神宮西", line_id: "M" },
  {
    id: "M28",
    name: "西高蔵",
    line_id: "M",
    special_node_type: "NISHITAKAKURA",
  },

  {
    id: "E01",
    name: "金山",
    line_id: "E",
    special_node_type: "KANAYAMA",
  },
  { id: "E02", name: "日比野", line_id: "E" },
  { id: "E03", name: "六番町", line_id: "E" },
  { id: "E04", name: "東海通", line_id: "E" },
  { id: "E05", name: "港区役所", line_id: "E" },
  { id: "E06", name: "築地口", line_id: "E" },
  { id: "E07", name: "名古屋港", line_id: "E" },

  { id: "T01", name: "上小田井", line_id: "T" },
  { id: "T02", name: "庄内緑地公園", line_id: "T" },
  { id: "T03", name: "庄内通", line_id: "T" },
  { id: "T04", name: "浄心", line_id: "T" },
  { id: "T05", name: "浅間町", line_id: "T" },
  { id: "T06", name: "丸の内", line_id: "T" },
  { id: "T07", name: "伏見", line_id: "T" },
  { id: "T08", name: "大須観音", line_id: "T" },
  { id: "T09", name: "上前津", line_id: "T" },
  { id: "T10", name: "鶴舞", line_id: "T" },
  { id: "T11", name: "荒畑", line_id: "T" },
  { id: "T12", name: "御器所", line_id: "T" },
  { id: "T13", name: "川名", line_id: "T" },
  { id: "T14", name: "いりなか", line_id: "T" },
  { id: "T15", name: "八事", line_id: "T" },
  { id: "T16", name: "塩釜口", line_id: "T" },
  { id: "T17", name: "植田", line_id: "T" },
  { id: "T18", name: "原", line_id: "T" },
  { id: "T19", name: "平針", line_id: "T" },
  { id: "T20", name: "赤池", line_id: "T" },

  { id: "S01", name: "太閤通", line_id: "S" },
  { id: "S02", name: "名古屋", line_id: "S" },
  {
    id: "S03",
    name: "国際センター",
    line_id: "S",
    special_node_type: "KOKUSAI",
  },
  { id: "S04", name: "丸の内", line_id: "S" },
  { id: "S05", name: "久屋大通", line_id: "S" },
  { id: "S06", name: "高丘", line_id: "S" },
  { id: "S07", name: "車道", line_id: "S" },
  { id: "S08", name: "今池", line_id: "S" },
  {
    id: "S09",
    name: "吹上",
    line_id: "S",
    special_node_type: "FUKIAGE",
  },
  { id: "S10", name: "御器所", line_id: "S" },
  { id: "S11", name: "桜山", line_id: "S" },
  { id: "S12", name: "瑞穂区役所", line_id: "S" },
  { id: "S13", name: "瑞穂運動場西", line_id: "S" },
  { id: "S14", name: "新瑞橋", line_id: "S" },
  { id: "S15", name: "桜本町", line_id: "S" },
  { id: "S16", name: "鶴里", line_id: "S" },
  { id: "S17", name: "野並", line_id: "S" },
  { id: "S18", name: "鳴子北", line_id: "S" },
  { id: "S19", name: "相生山", line_id: "S" },
  { id: "S20", name: "神沢", line_id: "S" },
  { id: "S21", name: "徳重", line_id: "S" },

  { id: "K01", name: "上飯田", line_id: "K" },
  { id: "K02", name: "平安通", line_id: "K" },
];
export default stations;