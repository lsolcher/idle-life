// The state must return a function
// to make the module reusable.
// See: https://vuex.vuejs.org/en/modules.html#module-reuse
const state = () => ({
    meat: 0
});


const mutations = {
    addMeat(state, amount) {
        state.meat += amount;
    },
    removeMeat(state, amount) {
        state.meat -= amount;
    }
};

const getters = {
    meat: state => {
        return state.meat;
    }
};



const actions = {

};




export default {
    // We're using namespacing
    // in all of our modules.
    namespaced: true,
    mutations,
    getters,
    state,
    actions
};