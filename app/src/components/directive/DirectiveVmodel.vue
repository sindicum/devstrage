<template>
  <div class="card border-0 m-3">
    <Title title="v-model" id="vmodel" />
    <div class="text-secondary lineheight">
      <div>データオブジェクトとテンプレートが双方向バインディングされデータの状態が常に同期される</div>
    </div>
    <Highlight :codeprop=example />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'

export default {
  data(){
    return {
      example: "<テンプレートタグ v-model='データオブジェクト名' />"
    }
  },
  components: {
    Title,
    Highlight
  },
}
</script>

<style scoped>
.lineheight {
  line-height: 2rem;
}
</style>