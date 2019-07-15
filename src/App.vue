<template>
  <div id="app">
    <van-tabs v-model="active" animated color="#33A0FF" title-active-color="#33A0FF">
      <van-tab v-for="(item,index) in statisticAnalysisTab" :key="index" :title="item">
        <Economy v-show="index == 0" />
        <Energy v-show="index == 1" />
        <Environmental v-show="index == 2" />
        <emergency v-show="index == 3" />
        <safety-supervision v-show="index == 4" />
        <Close v-show="index == 5" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Economy from "./components/economy";
import Energy from "./components/energy";
import Environmental from "./components/environmental";
import emergency from "./components/emergency";
import SafetySupervision from "./components/safetySupervision";
import Close from "./components/close";

export default {
  name: "App",
  data() {
    return {
      active: "",
      // statisticAnalysisTab: "",
       "statisticAnalysisTab": ["经济", "能源", "环保", "应急", "安监", "封闭"]
    };
  },
  components: {
    Economy,
    Energy,
    Environmental,
    emergency,
    SafetySupervision,
    Close
  },
  created() {
    // this.$axios.get("static/data.json").then(res => {
    //   this.statisticAnalysisTab = res.data.statisticAnalysisTab;
    // });
  }
};
</script>

<style lang="scss">

</style>
