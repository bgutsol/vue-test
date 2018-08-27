<template lang="pug">
  article.tile(:style="{height: item.height + 'px'}")
    .tile__header
      button.tile__btn-close(@click="deleteTileAction") x
      h2.tile__title {{ `Tile ${item.id}` }}
    .tile__content
</template>

<script>
import draggable from 'vuedraggable';
import { setTileResizeListener, removeTileResizeListener } from 'vendors/resizeDetector';

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
  },
  components: {
    draggable,
  },
  methods: {
    deleteTileAction() {
      this.$store.commit('desktop/removeListItem', this.item);
    },
  },
  props: {
    item: {
      type: [Object],
      default: () => ({}),
      required: true,
    },
  },
  mounted() {
    setTileResizeListener(this.$el, this.item.id);
  },
  destroyed() {
    removeTileResizeListener(this.$el);
  },
};
</script>

<style lang="scss" scoped>
  @import './Tile.scss';
</style>
