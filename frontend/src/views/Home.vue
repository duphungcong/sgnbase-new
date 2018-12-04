<template>
  <div>
    <b-table :data="checks" :columns="columns"
             :loading="loading"
             paginated
             backend-pagination
             :total="total"
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
      total: 0,
      loading: false,
      sortField: 'start_date',
      sortOrder: 'desc',
      defaultSortOrder: 'desc',
      page: 1,
      perPage: 20,
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
    ...mapState('work', ['checks']),
  },
  created() {
    this.$store.dispatch('work/getChecks', {
    });
  },
};
</script>
