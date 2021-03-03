<template>
  <button class="button"
          @click="$emit('click',$event)">
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator'
@Component
export default class Button extends Vue{

}
</script>

<style lang="scss" scoped>
.button {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  //里面的选择器可以是它的父元素
  &-wrapper {
    text-align: center;
    //margin会有合并的问题，但是padding一般会影响backgroud的范围
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>