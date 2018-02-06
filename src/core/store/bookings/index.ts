import { Module } from 'vuex';
import { BookingsState, RootState } from '../../../types/Store';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

export default {
    actions,
    getters,
    mutations,
    state,
} as Module<BookingsState, RootState>;
