<template>
  <div class="column">
    <div class="action">
      <button class="button is-primary new" @click="newCheck">New Check</button>
    </div>

    <b-table
      :data="checks"
      :loading="loading"
      paginated
      backend-pagination
      :total="numberOfChecks"
      :per-page="perPage"
      @page-change="onPageChange">

      <template slot-scope="props">
        <b-table-column field="aircraft.register" label="Aircraft" width="100">
            {{ props.row.aircraft.register }}
        </b-table-column>

        <b-table-column field="name" label="Check" width="300">
            {{ props.row.name }}
        </b-table-column>

        <b-table-column field="start_date" label="Start Date" width="200">
            {{ props.row.start_date.toLocaleString() }}
        </b-table-column>

        <b-table-column field="finish_date" label="Finish Date" width="200">
            {{ props.row.start_date }}
        </b-table-column>

        <b-table-column label="Actions" width="150">
          <div class="buttons">
            <span class="button" @click="editCheck(props.row.id)">Edit</span>
            <span class="button" @click="followCheck(props.row.id)">Follow</span>
          </div>
        </b-table-column>
    </template>

    </b-table>
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
    };
  },
  computed: {
    ...mapState('check', ['checks', 'numberOfChecks']),
  },
  methods: {
    onPageChange(page) {
      this.page = page;
      this.getChecks();
    },
    getChecks() {
      this.$store.dispatch('check/getChecks', {
        page: this.page,
      });
    },
    newCheck() {
      this.$router.push({ name: 'check' });
    },
    editCheck(id) {
      this.$router.push({ name: 'check', params: { id } });
    },
    followCheck(id) {
      this.$store.dispatch('followCheck', {
        id,
      });
    },
  },
  created() {
    this.getChecks();
  },
};
</script>

<style scoped>
  .action {
    margin-bottom: 0.5em;
  }
</style>
