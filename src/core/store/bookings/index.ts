import { Module } from 'vuex';
import { BookingsState, RootState } from '../../../types/Store';
import actions from './actions';
import mutations from './mutations';
import state from './state';

export default {
    actions,
    mutations,
    state,
} as Module<BookingsState, RootState>;
