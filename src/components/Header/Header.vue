<template lang="pug">
  .row
    nav.nav
      router-link.nav__link(to="/desktop") Desktop
      router-link.nav__link(to="/websocket") Websocket
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
  @import './Header.scss';
</style>
