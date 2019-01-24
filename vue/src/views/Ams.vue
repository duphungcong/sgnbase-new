<template>
  <div class="column">
    <b-field class="file">
      <b-upload v-model="file">
        <a class="button is-primary">
          <b-icon icon="upload"></b-icon>
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
export default {
  name: 'Ams',
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
