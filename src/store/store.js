import Vue from 'vue';
import Vuex from 'vuex';
import inventory from './modules/inventory'

import * as actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
    // Making sure that we're doing
    // everything correctly by enabling
    // strict mode in the dev environment.
    strict: process.env.NODE_ENV !== 'production',

    state: {
        value: 0
    },
    //getters
    //mutations
    actions,
    modules: {
        inventory
    }
});