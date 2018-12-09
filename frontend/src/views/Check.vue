<template>
  <div class="column is-6">
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
      <div class="control">
        <button class="button is-primary" @click="submit">Submit</button>
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
      // check: {
      //   name: 'test',
      //   start_date: new Date(),
      //   finish_date: new Date(),
      //   aircraft: null,
      // },
    };
  },
  computed: {
    ...mapState('work', ['aircraftList', 'check']),
  },
  methods: {
    submit() {
      console.log('submit');
      console.log('new check', this.check);
      this.$store.dispatch('work/createCheck', this.check);
    },
    back() {
      this.$router.push('/');
    },
    getAircraftList() {
      this.$store.dispatch('work/getAircraftList');
    },
    getCheck() {
      this.$store.dispatch('work/getCheck', {
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
};
</script>

<style scoped>

</style>
