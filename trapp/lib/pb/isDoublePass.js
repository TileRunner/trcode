import { MOVE_TYPE_PASS } from './prisonBreakConstants';

export function isDoublePass(movelist) {
    let last = movelist.length - 1;
    let secondlast = last - 1;
    return secondlast > -1 &&
      movelist[secondlast].type === MOVE_TYPE_PASS &&
      movelist[last].type === MOVE_TYPE_PASS;
}
