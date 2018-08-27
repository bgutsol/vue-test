<template lang='pug'>
  div#app
    Header
    .row
      router-view
</template>

<script>
import Header from 'components/Header/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "sass/app.scss";
</style>
