import { BookingsMutationTree, BookingsState } from '../../../types/Store';
import * as types from './types/mutations';

export default {
    [types.SHOW_POPUP](state: BookingsState) {
        state.showPopup = true;
    },

    [types.CLOSE_POPUP](state: BookingsState) {
        state.showPopup = false;
    },
} as BookingsMutationTree;
