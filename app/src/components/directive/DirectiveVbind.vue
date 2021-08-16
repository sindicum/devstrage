<template>
  <div class="card border-0 m-3">
    <Title title="v-bind" id="vbind" />
    <div class="text-secondary lineheight">
      HTMLタグの属性に値をバインディングする。属性は主にclassとstyleが指定される。
    </div>
    <Highlight :codeprop=example />
    <div class="card mt-3 p-3">
      <div :class="attrs">test</div>
      <button class="btn btn-primary" type="button" style="width: 200px" @click="changetextcolor">テキストカラーの変更</button>
    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./DirectiveVbind.txt' 

export default {
  data(){
    return {
      code: Code,
      attrs: {
        'text-danger': true
      },
      example: "v-bind:プロパティ名='オブジェクト・配列'\n// 省略構文\n:プロパティ名='オブジェクト・配列'"
    }
  },
  components: {
    Title,
    Highlight
  },
  methods: {
    changetextcolor() {
      this.attrs['text-danger'] = !this.attrs['text-danger']
    }
  }
}
</script>

<style scoped>
.lineheight {
  line-height: 2rem;
}
</style>