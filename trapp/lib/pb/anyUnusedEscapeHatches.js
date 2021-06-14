import { USED_BY_NONE } from "./prisonBreakConstants";

export function anyUnusedEscapeHatches(squareArray=[]) { // Used to check for game over due to no more escapes possible
    let racksize = (squareArray.length - 1) / 2;
    let edge = racksize * 2;
    let middle = racksize;
    let anyLeft = true;
    if (squareArray[0][0].usedby       !== USED_BY_NONE &&
      squareArray[0][middle].usedby    !== USED_BY_NONE &&
      squareArray[0][edge].usedby      !== USED_BY_NONE &&
      squareArray[middle][0].usedby    !== USED_BY_NONE &&
      squareArray[middle][edge].usedby !== USED_BY_NONE &&
      squareArray[edge][0].usedby      !== USED_BY_NONE &&
      squareArray[edge][middle].usedby !== USED_BY_NONE &&
      squareArray[edge][edge].usedby   !== USED_BY_NONE) {
        anyLeft = false;; // No escape hatches left
    }
    return anyLeft;
}
  