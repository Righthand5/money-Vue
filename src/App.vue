<template>
<div id="app">
  <router-view/>
</div>
</template>
<!--全局的scss是不可以加上scoped的-->
<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
body{
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.5;/*导航栏的默认行高*/
  font-family: $font-hei;
  font-size: 16px;
  background: #f5f5f5;
}
</style>
