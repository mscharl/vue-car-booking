import { Booking } from '../../../types/Booking';
import { BookingActionContext, BookingsActionTree } from '../../../types/Store';
import * as types from './types/actions';
import * as mutationTypes from './types/mutations';

export default {
    /**
     * Action to trigger the creation of a new booking
     * @param {BookingActionContext} context
     */
    [types.CREATE_NEW_BOOKING](context: BookingActionContext) {
        context.commit(mutationTypes.SHOW_POPUP);
    },

    /**
     * Action to dismiss the creation of a booking
     * @param {BookingActionContext} context
     */
    [types.DISMISS_NEW_BOOKING](context: BookingActionContext) {
        return context.dispatch(types.CLOSE_BOOKING_POPUP);
    },

    /**
     * Action to close the booking popup
     * @param {BookingActionContext} context
     */
    [types.CLOSE_BOOKING_POPUP](context: BookingActionContext) {
        context.commit(mutationTypes.CLOSE_POPUP);
    },

    /**
     * Add the given booking to the system
     * @param {BookingActionContext} context
     * @param {Booking} booking
     */
    [types.ADD_NEW_BOOKING](context: BookingActionContext, booking: Booking) {
        context.commit(mutationTypes.ADD_BOOKING, booking);

        // simulate api call
        return new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
    },
} as BookingsActionTree;
