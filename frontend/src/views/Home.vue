<template>
  <div>
    <b-table
      :data="checks"
      :columns="columns"
      :loading="loading"
      paginated
      backend-pagination
      :total="count"
      :per-page="perPage"
      @page-change="onPageChange"></b-table>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      loading: false,
      sortField: 'start_date',
      sortOrder: 'desc',
      defaultSortOrder: 'desc',
      page: 1,
      perPage: 5,
      columns: [
        {
          field: 'aircraft.register',
          label: 'Aircraft',
          width: '100',
        },
        {
          field: 'name',
          label: 'Name',
          width: '400',
        },
        {
          field: 'start_date',
          label: 'Start Date',
          width: '200',
        },
        {
          field: 'finish_date',
          label: 'Finish Date',
          width: '200',
        },
        {
          field: 'action',
          label: 'Action',
          centered: true,
        },
      ],
    };
  },
  computed: {
    ...mapState('work', ['checks', 'count']),
  },
  methods: {
    onPageChange(page) {
      this.page = page;
      this.getChecks();
    },
    getChecks() {
      this.$store.dispatch('work/getChecks', {
        page: this.page,
    });
    },
  },
  created() {
    this.getChecks();
  },
};
</script>
