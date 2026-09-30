/* ２段階目両端拡張DFSの初期化にまつわるファイル */

import type { ExtendedPathState } from "../../types/extendedPathState";// 2段階目のルート状態(currentPathStateの拡張版)
import type { currentPathState } from "../../types/currentPathState";
import convertFareSection from "../fareSection";
import { convertStationKeysToBits } from "./stationBitUtils";


/* 初期化関数 核ルートのリストを拡張する*/
export const initializeExtendedPathState = (corePathState: currentPathState): ExtendedPathState => {
    const fareSection: number = convertFareSection(corePathState.distanceMeters);// 距離->区間に変換
    const coveredStationBits: bigint = convertStationKeysToBits(corePathState.usedStationKeys);
    const usedStationKeys: Set<string> = new Set(corePathState.usedStationKeys);
    const initialExtendedPathState: ExtendedPathState = {
        /* currentPathState分 */
        routeNodesIds: corePathState.routeNodesIds,
        usedStationKeys,// プロパティ名と変数名同じならそのまま書ける
        transferCount: corePathState.transferCount,
        constraintStationKeys: new Set(corePathState.constraintStationKeys),
        hasPurchaseWarning: corePathState.hasPurchaseWarning,
        distanceMeters: corePathState.distanceMeters,
        /* ２段階目の追加分 */
        fareSection: fareSection,
        coveredStationBits,
        coveredStationCount: usedStationKeys.size
    }
    return initialExtendedPathState;
}


