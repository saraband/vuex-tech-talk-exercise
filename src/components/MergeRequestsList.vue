<template>
  <div>
    <MergeRequestsListFilters />

    <div class="merge-requests-listing">
      <MergeRequestsListItem
        v-for="mergeRequest in MockMergeRequests"
        :key="mergeRequest.id"
        :merge-request="mergeRequest"
      />
    </div>
  </div>
</template>

<script>
import MergeRequestsListFilters from "./MergeRequestsListFilters.vue";
import MergeRequestsListItem from "./MergeRequestsListItem.vue";

export default {
  name: "MergeRequestsList",
  components: {
    MergeRequestsListFilters,
    MergeRequestsListItem,
  },
  created() {
    this.MockMergeRequests = MockMergeRequests;
  },
};

/* MOCK DATA - TO REPLACE */
const MockMergeRequests = Array.from({ length: 5 }, (_, index) => ({
  id: index,
  title: `#${index} Merge Request`,
  closed: !!(index % 2),
  branchFrom: "main",
  branchTo: "develop",
  date: new Date().toISOString(),
  author: {
    id: 42,
    name: "Lisbeth",
  },
}));
</script>

<style lang="scss" scoped>
.merge-requests-listing {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
