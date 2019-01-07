<template>
  <div class="column">
    <b-field class="file">
      <b-upload v-model="file">
        <a class="button is-primary">
          <!--<b-icon icon="upload"></b-icon>-->
          <span>Upload workpack</span>
        </a>
      </b-upload>
      <span class="file-name" v-if="file">
        {{ file.name }}
      </span>
    </b-field>
  </div>
</template>

<script>

import XLSX from 'xlsx';
import { mapState } from 'vuex';

export default {
  name: 'ZoneDivision',
  data() {
    return {
      file: null,
      workpack: [],
    };
  },
  computed: {
    ...mapState(['checkId']),
  },
  watch: {
    file(val) {
      this.workpack = this.readFile(val);
    },
  },
  methods: {
    readFile(file) {
      console.log(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws, { header: ['wpItem', 'name', 'zone', 'type', 'title'] });
        /* Update state */
        data.shift();
        // this.cols = makeCols(ws['!ref'])
        return data;
      };
      reader.readAsBinaryString(file);
    },
    scanWp(workpack) {
      console.log('scan wp');
    },
  },
};
</script>

<style scoped>

</style>
