// The state must return a function
// to make the module reusable.
// See: https://vuex.vuejs.org/en/modules.html#module-reuse
const state = () => ({
    food: 0
});


const mutations = {
    add(state, amount) {
        state.food += amount;
    },
    remove(state, amount) {
        state.food -= amount;
    }
};

const getters = {
    food: state => {
        return state.food;
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