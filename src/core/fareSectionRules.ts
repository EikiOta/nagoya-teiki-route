/* 区間と距離の対応 */

export interface FareSection {
    sectionNum: number;// 区
    maxDistanceMeters: number;// 区間の上限。浮動小数点がだるいのでメートルでいく。
}

export const fareSections: FareSection[] = [
    {sectionNum: 1, maxDistanceMeters: 3000},
    {sectionNum: 2, maxDistanceMeters: 7000},
    {sectionNum: 3, maxDistanceMeters: 11000},
    {sectionNum: 4, maxDistanceMeters: 15000},
    {sectionNum: 5, maxDistanceMeters: Infinity}// 最大が5区なので無限値
]

export default fareSections;