<template lang="pug">
  nav
    router-link(to="/desktop") Interactive Desktop
    router-link(to="/websocket") Websocket
</template>

<script>
export default {
  name: 'Header',
};
</script>
