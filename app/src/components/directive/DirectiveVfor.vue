<template>
  <div class="card border-0 m-3">
    <Title title="v-for" id="vfor" />
    <div class="text-secondary lineheight">
      配列やオブジェクトから要素を順番に取り出し、内容をループ処理する
    </div>
    <div class="card mt-3 p-3">

    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./DirectiveVfor.txt' 

export default {
  data(){
    return {
      code: Code,
    }
  },
  components: {
    Title,
    Highlight
  },
  methods: {

  }
}
</script>

<style scoped>
.lineheight {
  line-height: 2rem;
}
</style>