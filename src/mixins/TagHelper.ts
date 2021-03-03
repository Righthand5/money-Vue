import Vue from 'vue';
import Component from "vue-class-component";

const map: {[key: string]: string} = {
    'tag name duplicate':'标签名重复'
}


@Component
export class TagHelper extends Vue{
    createTag(){
        const name = window.prompt('请输入标签');
        if(!name){return window.alert('标签名不能为空');}
        this.$store.commit('createTag',name);
        if(this.$store.state.createTagsError){
            window.alert(map[this.$store.state.createTagsError.message] || '未知错误');
        }
    }
}
export default TagHelper;