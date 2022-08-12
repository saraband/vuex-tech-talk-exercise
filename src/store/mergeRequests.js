import axios from "axios";

/**
 * Endpoint to retrieve merge requests: https://vuex-tech-talk-api.herokuapp.com/merge-requests
 */

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
