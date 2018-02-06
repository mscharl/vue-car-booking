import { BookingsGetterTree, BookingsState } from '../../../types/Store';
import * as types from './types/getters';

export default {

    [types.SHOW_POPUP](state: BookingsState): boolean {
        return state.showPopup;
    },

} as BookingsGetterTree;
