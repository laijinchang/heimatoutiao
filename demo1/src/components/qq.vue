<template>
  <div>
    <div>原{{ $store.state.count }}</div>
    <div>原{{ $store.state.count }}</div>
    <div>原{{ $store.state.count }}</div>
    <div>原{{ $store.state.count }}</div>
    <div>计算{{ count }}</div>
    <div>计算{{ count }}</div>
    <div>计算{{ count }}</div>
    <div>计算{{ count }}</div>
    <div>计算{{ sd }}</div>
    <button @click="btn">原始</button>
    <button @click="addFn(100, $event)">...mapm</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    btn() {
      this.$store.commit("addFn", 111);
    },
    ...mapMutations(["addFn"]),
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    ...mapState(["count", "sd"]),
  },
  // data() {
  //   return {
  //     count: 1,
  //   };
  // },
};
</script>

<style lang="scss" scoped>
</style>