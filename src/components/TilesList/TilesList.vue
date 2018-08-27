<template lang="pug">
  .tiles-list
    Draggable.tiles-list(element="ul" v-model="list" :options="listOptions")
      li.tiles-list__item(v-for="item in list" :key="item.id")
        Tile(:item="item")
    button.tiles-list__btn-add(@click="addTile") Add new
</template>

<script>
import Draggable from 'vuedraggable';
import Tile from 'components/Tile/Tile';

export default {
  computed: {
    list: {
      get() {
        return this.$store.state.desktop.list;
      },
      set(value) {
        this.$store.commit('desktop/updateList', value);
      },
    },
    listOptions() {
      return {
        animation: 230,
        handle: '.tile__header',
        ghostClass: 'tiles-list__item--ghost',
      };
    },
  },
  methods: {
    addTile() {
      this.$store.commit('desktop/addListItem');
    },
  },
  components: {
    Draggable,
    Tile,
  },
};
</script>

<style lang="scss" scoped>
  @import './TilesList.scss';
</style>
