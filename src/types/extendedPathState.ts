import type { currentPathState } from "./currentPathState";
export type ExtendedPathState = currentPathState & {
    fareSection: number;// 現在の区間
    coveredStationBits: bigint;// 物理駅のビット列版。劣化比較時に使用する。
    coveredStationCount: number;// 物理駅の合計数
}