<template lang='pug'>
  div#app
    Header
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

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
