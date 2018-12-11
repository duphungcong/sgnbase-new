<template>
  <div></div>
</template>

<script>
export default {
  name: 'ZoneDivision',
  data() {
    return {
      checkId: null,
    };
  },
  created() {
    if (this.$route.params.id) {
      this.checkId = this.$route.params.id;
    }
  },
};
</script>

<style scoped>

</style>
