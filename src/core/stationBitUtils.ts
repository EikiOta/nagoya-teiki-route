/* ビット列に関するファイル */
import stations from "../data/stationNodes";
/* stationKeys -> bitIndexを生成する関数(起動時１回のみ読み込み想定) */
export const createIndexBitsMap = () => {
    const bitIndexMap = new Map<string, number>();// stationKeys(ex: "fukiage")がキー, 値はbitの位置(0-indexed)
    let pos: number = 0;
    /* 駅リストを上から舐めてbitsMapに登録(重複はスキップ) */
    for(const station of stations){
        /* 登録前に重複チェック(すでにstationKeyがあるか？) */
        if(bitIndexMap.has(station.stationKey)){
            continue;// 既にあるのでスキップ(正常なら乗り換え駅が2回目に出てきたタイミングのみcontinueされる)
        }
        bitIndexMap.set(station.stationKey, pos);
        pos++;
    }
    return bitIndexMap;
}
const bitsMap = createIndexBitsMap();

/* はじめに物理駅setをビット列にして返却する関数(初期化用) */
export const convertStationKeysToBits = (usedStationKeys:Set<string>): bigint => {
    let bits: bigint = 0n;// 変換して生成したビット列。全て0で初期化
    let bitIndex: bigint;
    //let mask: bigint = 0n;
    /* 回す */
    for(const stationKey of usedStationKeys){ 
        /* 型ガード */
        const rawBitIndex = bitsMap.get(stationKey); 
        if(rawBitIndex === undefined){
            throw new Error("stationKeyに対応するbitIndexが見つかりませんでした");
        }

        bitIndex = BigInt(rawBitIndex); // 該当位置取得
        let mask: bigint = 1n;// 1だけ用意。
        mask = mask << bitIndex;// シフトする. 例) bitIndex: 5なら "1" -> "100000"
        bits = bits | mask;// サブネットマスクのように、該当箇所だけ1にしたmaskとOR演算することで反映する(テクい)
    }
    return bits;
    
}