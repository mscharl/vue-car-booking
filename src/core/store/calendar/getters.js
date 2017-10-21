import * as types from './types/getters';
import { firstDayFromRoute } from '../../../helper';

export default {

    [types.FIRST_DAY](state, getters, rootState) {
        return firstDayFromRoute(rootState.route)
    },
}
