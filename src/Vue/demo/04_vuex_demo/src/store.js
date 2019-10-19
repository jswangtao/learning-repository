import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 0
};
const mutations = {
  INCREMENT(state) {
    state.count++;
  },
  DECREMENT(state) {
    state.count--;
  }
};
const actions = {
  increment({ commit }) {
    commit("INCREMENT");
  },
  decrement({ commit }) {
    commit("DECREMENT");
  },
  incrementIfOdd({ commit, state }) {
    if (state % 2 !== 0) {
      commit("INCREMENT");
    }
  },
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit("INCREMENT");
    }, 1000);
  }
};

const getters = {
  evenOrOdd() {
    return state.count % 2 ? "奇数" : "偶数";
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
