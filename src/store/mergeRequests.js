import axios from "axios";

export default {
  namespaced: true,
  state: {
    filters: {
      search: "",
      author: null,
      branchTo: null,
      mergeState: "all",
      ownMergeRequests: false,
    },
    mergeRequests: [],
    isFetchingMergeRequests: false,
  },
  mutations: {},
  getters: {},
  actions: {},
};
