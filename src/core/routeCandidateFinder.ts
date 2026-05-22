/* 必須駅２駅から条件を満たす候補ルート一覧を出力する関数(DFS) */
import getNextNode from "./graphUtils";
import adjacencyList from "../data/adjacencyList";
import type { currentPathState } from "../types/currentPathState";
import isFulfilledCandidateRules from "./routeCandidateRules";
import { createNextPathState } from "./createNextPathState";

export const routeCandidateFinder = (startNodeId: string, endNodeId: string) => {
    const currentPathState: currentPathState;
    const nextNodeArr: string[] = getNextNode(startNodeId);
    const recursiveDFS = () => {
        for(const nextNode of nextNodeArr){
            let transferCount: number = 0;
            /* 追加前に制約満たしているか？ */
            if(!isFulfilledCandidateRules(currentPathState, nextNode)){
                continue;
            }
            /* 追加可能 */
            

            
        }
    }

}