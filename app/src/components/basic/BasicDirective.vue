<template>
  <div class="card border-0 m-3">
    <Title title="ディレクティブ" id="directive" />
    <div class="text-secondary lineheight">
      <div>Vue.jsのテンプレートの仕組みとして以下の2点が挙げられる</div>
      <li>{{"\{\{...\}\}"}}で定義されるMustache構文</li>
      <li>v-xxxxで定義されるディレクティブ</li>
      <br>
      <div>ディレクティブではHTMLの属性を用いて独自の拡張を行う。</div>
      <div>例えば、v-bindは属性値にJavaScript式を埋め込むことができる。</div>
      <div class="card mt-3 p-3">
        <div><a v-bind:href="url">Vue.js</a></div>
      </div>
    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./BasicDirective.txt' 

export default {
  data(){
    return {
      url: 'https://v3.vuejs.org/',
      code: Code
    }
  },
  components: {
    Title,
    Highlight
  }
}
</script>

<style scoped>
.lineheight {
  line-height: 2rem;
}
</style>