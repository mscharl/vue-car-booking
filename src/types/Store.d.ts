import { Route } from 'vue-router';
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex';

export interface RootState {
    route: Route;
    calendar: object;
    bookings: BookingsState;
}

export interface BookingsState {
    showPopup: boolean;
}

export type BookingsActionTree = ActionTree<BookingsState, RootState>;
export type BookingsGetterTree = GetterTree<BookingsState, RootState>;
export type BookingsMutationTree = MutationTree<BookingsState>;

export type BookingActionContext = ActionContext<BookingsState, RootState>;
