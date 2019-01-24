<template>
  <div class="column">
    <div class="action">
      <button class="button is-primary new" @click="newNrc">New Nrc</button>
    </div>

    <b-table
      :data="nrcList"
      :loading="loading"
      paginated
      backend-pagination
      :total="numberOfNrcs"
      :per-page="perPage"
      @page-change="onPageChange">

      <template slot-scope="props">
        <b-table-column field="number" label="Number" width="100">
            {{ props.row.number }}
        </b-table-column>

        <b-table-column field="wo" label="WO" width="300">
            {{ props.row.wo }}
        </b-table-column>

        <b-table-column field="title" label="Title" width="200">
            {{ props.row.title }}
        </b-table-column>

        <b-table-column field="priority" label="Priority" width="200">
            {{ props.row.priority }}
        </b-table-column>

        <b-table-column label="Actions" width="150">
          <div class="buttons">
            <span class="button" @click="editNrc(props.row.id)">Edit</span>
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
    ...mapState('nrc', ['nrcList', 'numberOfNrcs']),
  },
  methods: {
    onPageChange(page) {
      this.page = page;
      this.getNrcList();
    },
    getNrcList() {
      this.$store.dispatch('nrc/getNrcList', {
        page: this.page,
      });
    },
    newNrc() {
      this.$router.push({ name: 'nrc' });
    },
    editNrc(id) {
      this.$router.push({ name: 'nrc', params: { id } });
    },
  },
  created() {
    this.getNrcList();
  },
};
</script>

<style scoped>
  .action {
    margin-bottom: 0.5em;
  }
</style>
