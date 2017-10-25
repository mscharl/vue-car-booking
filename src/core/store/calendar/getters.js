import * as types from './types/getters';
import { firstDayFromRoute } from '../../../helper';

const ROUTENAME_DURATION_MAP = {
    month: 'months',
    week : 'weeks',
    day  : 'days',
};

export default {

    /**
     * Getter for the current first day based on the route
     *
     * @param state
     * @param getters
     * @param rootState
     *
     * @return {moment.Moment}
     */
    [types.FIRST_DAY](state, getters, rootState) {
        return firstDayFromRoute(rootState.route)
    },

    /**
     * Calculate the previous first day based on the current route and first day
     *
     * @param state
     * @param getters
     * @param rootState
     *
     * @return {moment.Moment}
     */
    [types.PREV_FIRST_DAY](state, getters, rootState) {
        return getters[types.FIRST_DAY]
            .clone()
            .subtract(1, ROUTENAME_DURATION_MAP[rootState.route.name]);
    },

    /**
     * Calculate the next first day based on the current route and first day
     *
     * @param state
     * @param getters
     * @param rootState
     *
     * @return {moment.Moment}
     */
    [types.NEXT_FIRST_DAY](state, getters, rootState) {
        return getters[types.FIRST_DAY]
            .clone()
            .add(1, ROUTENAME_DURATION_MAP[rootState.route.name]);
    },
}
