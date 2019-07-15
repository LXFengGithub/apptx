<template>
  <!-- 经济 -->
  <div class="economy">
    <m-title :gettitle="settitle"></m-title>
    <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>

    <m-title :gettitle="settitle"></m-title>
    <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>

    <m-title :gettitle="settitle"></m-title>
    <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>

    <m-title :gettitle="settitle"></m-title>
    <ve-line :data="chartData" :settings="chartSettings4"></ve-line>
  </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      metrics: ["访问用户"],
      dimension: ["日期"]
    };
    this.chartSettings4 = {
      metrics: ["访问用户", "下单用户"],
      dimension: ["日期"]
    };
    return {
      settitle: "产值完成额（单位：万元）",
      chartData: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1393 },
          { 日期: "1/2", 访问用户: 3530 },
          { 日期: "1/3", 访问用户: 2923 },
          { 日期: "1/4", 访问用户: 1723 },
          { 日期: "1/5", 访问用户: 3792 },
          { 日期: "1/6", 访问用户: 4593 }
        ]
      },
      chartData4: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1393 },
          { 日期: "1/2", 访问用户: 3530 },
          { 日期: "1/3", 访问用户: 2923 },
          { 日期: "1/4", 访问用户: 1723 },
          { 日期: "1/5", 访问用户: 3792 },
          { 日期: "1/6", 访问用户: 4593 }
        ]
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss">
</style>