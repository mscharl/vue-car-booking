import { BookingActionContext, BookingsActionTree } from '../../../types/Store';
import * as types from './types/actions';
import * as mutationTypes from './types/mutations';

export default {
    [types.CREATE_NEW_BOOKING](context: BookingActionContext) {
        context.commit(mutationTypes.SHOW_POPUP);
    },

    [types.DISMISS_NEW_BOOKING](context: BookingActionContext) {
        context.commit(mutationTypes.CLOSE_POPUP);
    },
} as BookingsActionTree;
