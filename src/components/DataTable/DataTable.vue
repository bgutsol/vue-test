<template lang="pug">
  table.data-table
    thead
      tr
        th From
        th To
        th Sum
    tbody
      tr(v-for="(item, index) in data" :key="index")
        td: ul.data-table__list: li.data-table__list-item(v-for="(address, index) in item.inputAddress" :key="index")
          a.data-table__link(:href="getAddressUrl(address)" target="_blank") {{ address }}
        td: ul.data-table__list: li.data-table__list-item(v-for="(address, index) in item.outAddress" :key="index")
          a.data-table__link(:href="getAddressUrl(address)" target="_blank") {{ address }}
        td: span.data-table__total {{ item.sum }} BTC
</template>

<script>
export default {
  props: {
    data: {
      type: [Array],
      default: () => [],
      required: true,
    },
  },
  methods: {
    getAddressUrl(address) {
      return `https://www.blockchain.com/btc/address/${address}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import './DataTable.scss';
</style>
