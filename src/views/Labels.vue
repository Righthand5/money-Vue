<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id"
        :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import TagHelper from "@/mixins/TagHelper";
import {mixins} from 'vue-class-component';




@Component({
  components: {Button},
})
export default class Labels extends mixins(TagHelper) {
  get tags(){
    return this.$store.state.tagList;
  }
  beforeCreate(){
    //每次切标签就重新fetch一遍
    this.$store.commit('fetchTags');
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 24px;
      height: 24px;
      color: #666;
      margin-right: 16px;
    }

  }
}

.createTag {
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