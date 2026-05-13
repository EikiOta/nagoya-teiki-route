import fareSections from "./fareSectionRules"
/* 距離から区間を算出する関数 */
export const convertFareSection = (distance: number): number => {
    if(distance <= fareSections[0].maxDistanceMeters){
        /* 1区 */
        return fareSections[0].sectionNum;
    }else if(distance <= fareSections[1].maxDistanceMeters){
        /* 2区 */
        return fareSections[1].sectionNum;
    }else if(distance <= fareSections[2].maxDistanceMeters){
        /* 3区 */
        return fareSections[2].sectionNum;
    }else if(distance <= fareSections[3].maxDistanceMeters){
        /* 4区 */
        return fareSections[3].sectionNum;
    }else{
        /* 5区 */
        return fareSections[4].sectionNum;
    }
}
export default convertFareSection;