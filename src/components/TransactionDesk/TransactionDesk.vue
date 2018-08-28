<template lang="pug">
  .transaction-desk
    .transaction-desk__controls
      button.transaction-desk__btn.transaction-desk__btn--green(@click="subscribe") Start
      button.transaction-desk__btn.transaction-desk__btn--red(@click="unsubscribe") Stop
      button.transaction-desk__btn.transaction-desk__btn--yellow(@click="clear") Reset
    .transaction-desk__content
      h2.transaction-desk__total Total: {{ totalSum }} BTC
      DataTable.transaction-desk__table(:data="dataList")
</template>

<script>
import { mapState } from 'vuex';
import DataTable from 'components/DataTable/DataTable';

const SATOSHI_TO_BTC = 100000000;

const getTransactionInfo = ({ x: info }) => {
  const inputAddress = info.inputs.map(item => item.prev_out.addr);
  const outAddress = info.out.map(item => item.addr);
  const outSum = info.out.reduce((result, current) => result + current.value, 0);
  const outSumInBtc = outSum / SATOSHI_TO_BTC;

  return {
    inputAddress,
    outAddress,
    sum: outSumInBtc,
  };
};

export default {
  data() {
    return {
      isSubscribed: false,
      dataList: [],
      totalSum: 0,
    };
  },
  computed: {
    ...mapState({
      message: state => state.websocket.socket.message,
      isConnected: state => state.websocket.socket.isConnected,
    }),
  },
  watch: {
    message() {
      const transactionInfo = getTransactionInfo(this.message);

      this.totalSum += transactionInfo.sum;
      this.dataList.unshift(transactionInfo);
    },
  },
  methods: {
    subscribe() {
      if (this.isConnected && !this.isSubscribed) {
        this.$socket.sendObj({ op: 'unconfirmed_sub' });
        this.isSubscribed = true;
      }
    },
    unsubscribe() {
      if (this.isConnected && this.isSubscribed) {
        this.$socket.sendObj({ op: 'unconfirmed_unsub' });
        this.isSubscribed = false;
      }
    },
    clear() {
      this.dataList = [];
      this.totalSum = 0;
    },
  },
  mounted() {
    this.$connect();
  },
  destroyed() {
    this.$disconnect();
  },
  components: {
    DataTable,
  },
};
</script>

<style lang="scss" scoped>
  @import './TransactionDesk.scss';
</style>
