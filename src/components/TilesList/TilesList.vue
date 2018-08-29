<template lang="pug">
  .tiles-list
    Draggable.tiles-list__list(element="ul" v-model="list" :options="listOptions")
      li.tiles-list__item(v-for="item in list" :key="item.id")
        Tile(:item="item")
    button.tiles-list__btn-add(@click="addTile") + Add tile to trading desk
</template>

<script>
import Draggable from 'vuedraggable';
import Tile from 'components/Tile/Tile';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      listOptions: {
        animation: 230,
        handle: '.tile__header',
        ghostClass: 'tiles-list__item--ghost',
      },
    };
  },
  computed: {
    list: {
      get() {
        return this.$store.state.desktop.list;
      },
      set(value) {
        this.updateList(value);
      },
    },
  },
  methods: {
    ...mapMutations('desktop', {
      addTile: 'addListItem',
      updateList: 'updateList',
    }),
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
