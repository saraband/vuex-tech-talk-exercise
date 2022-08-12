<template>
  <div class="filters">
    <!-- SEARCH -->
    <input placeholder="Search" />

    <!-- PR STATE-->
    <select>
      <option value="all">All states</option>
      <option value="closed">Closed</option>
      <option value="open">Open</option>
    </select>

    <!-- BRANCH -->
    <select>
      <option value="">All branches</option>
    </select>

    <!-- AUTHORS-->
    <select>
      <option value="">All authors</option>
    </select>

    <label>
      <input type="checkbox" />
      Search my merge requests only
    </label>

    <div class="results">0 merge requests found.</div>
  </div>
</template>

<script>
export default {
  name: "MergeRequestsListFilters",
};
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  gap: 1rem;
}

.results {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}

@keyframes Rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.loader {
  height: 1rem;
  animation: 1s Rotate infinite linear;
}
</style>
