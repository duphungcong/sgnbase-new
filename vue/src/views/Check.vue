<template>
  <div class="column is-4">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Check name" v-model="check.name">
      </div>
    </div>

    <div class="field">
      <label class="label">Start Date</label>
      <div class="control">
          <b-datepicker
            placeholder="Select date"
            icon="calendar-alt"
            v-model="check.start_date">
          </b-datepicker>
          <b-timepicker
            placeholder="Select time"
            icon="clock"
            v-model="check.start_date">
          </b-timepicker>
      </div>
    </div>

    <div class="field">
      <label class="label">Finish Date</label>
      <div class="control">
          <b-datepicker
            placeholder="Select date"
            icon="calendar-alt"
            v-model="check.finish_date">
          </b-datepicker>
          <b-timepicker
            placeholder="Select time"
            icon="clock"
            v-model="check.finish_date">
          </b-timepicker>
      </div>
    </div>

    <div class="field">
      <label class="label">Aircraft</label>
      <div class="control">
        <b-select placeholder="Select an aircraft" v-model="check.aircraft">
          <option
            v-for="aircraft in aircraftList"
            :value="aircraft"
            :key="aircraft.id">{{ aircraft.register }}</option>
        </b-select>
      </div>
    </div>

    <div class="field is-grouped">
      <template v-if="checkId">
        <div class="control">
          <button class="button is-primary" @click="updateCheck">Save changes</button>
        </div>
        <div class="control">
          <button class="button is-danger" @click="deleteCheck">Delete check</button>
        </div>
      </template>

      <div class="control" v-else>
        <button class="button is-primary" @click="createCheck">Create check</button>
      </div>

      <div class="control">
        <button class="button is-text" @click="back">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'Check',
  data() {
    return {
      checkId: null,
    };
  },
  computed: {
    ...mapState('check', ['aircraftList', 'check']),
  },
  methods: {
    createCheck() {
      console.log('create');
      this.$store.dispatch('check/createCheck', {
        check: this.check,
      });
    },
    updateCheck() {
      console.log('update');
      this.$store.dispatch('check/updateCheck', {
        id: this.checkId,
        check: this.check,
      });
    },
    deleteCheck() {
      console.log('delete');
      this.$store.dispatch('check/deleteCheck', {
        id: this.checkId,
      });
    },
    back() {
      this.$router.push('/');
    },
    getAircraftList() {
      this.$store.dispatch('check/getAircraftList');
    },
    getCheck() {
      this.$store.dispatch('check/getCheck', {
        id: this.checkId,
      });
    },
  },
  created() {
    if (this.$route.params.id) {
      this.checkId = this.$route.params.id;
    }
    this.getCheck();
    this.getAircraftList();
  },
  mounted() {},
};
</script>

<style scoped>

</style>
