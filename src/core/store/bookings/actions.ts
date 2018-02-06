import { BookingActionContext, BookingsActionTree } from '../../../types/Store';
import * as types from './types/actions';
import * as mutationTypes from './types/mutations';

export default {
    [types.CREATE_NEW_BOOKING](context: BookingActionContext, payload: any) {
        context.commit(mutationTypes.showPopup);
    },
} as BookingsActionTree;
