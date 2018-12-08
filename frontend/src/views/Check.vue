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
            v-model="start.date">
          </b-datepicker>
          <b-timepicker
            placeholder="Select time"
            icon="clock"
            v-model="start.time"
            :time-formatter="formatter">
          </b-timepicker>
      </div>
    </div>

    <div class="field">
      <label class="label">Finish Date</label>
      <div class="control">
          <b-datepicker
            placeholder="Select date"
            icon="calendar-alt">
          </b-datepicker>
          <b-timepicker
            placeholder="Select time"
            icon="clock"
            v-model="finish.time">
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
      start: {
        date: new Date('2018-12-04T09:02:44Z'),
        time: new Date('2018-12-04T09:02:44Z'),
      },
      finish: {
        date: null,
        time: new Date('Jan 01 1970 20:00 GMT+0700'),
      },
      check: {
        name: 'test',
        start_date: '',
        finish_date: '2018-12-04T09:02:44Z',
        aircraft: null,
      },
    };
  },
  computed: {
    ...mapState('work', ['aircraftList']),
    startDate() {
      this.start.time.getHours();
    },
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
    formatter(d) {
      return d.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo'});
    },
  },
  created() {
    this.getAircraftList();
  },
};
</script>

<style scoped>

</style>
