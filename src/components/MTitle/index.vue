<template>
  <div class="title">{{gettitle}}</div>
</template>

<script>
export default {
  props: {
    gettitle: String,
    required: true
  }
};
</script>

<style lang="scss">
.title {
  padding: 0.21rem 0.34rem;
  font-size: 0.28rem;
  background-color: #ebebeb;
  color: #333;
}
</style>