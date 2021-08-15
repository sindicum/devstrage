<template>
  <div class="card border-0 m-3">
    <Title title="Vus.jsを理解するために" />
    <div class="text-secondary lineheight">
      <div>Vue.jsを理解するためには以下を押さえる</div>
      <li>ディレクティブ</li>
      <li>算出プロパティ・メソッド</li>
      <li>ライフサイクルフック</li>
      <br>
    </div>
  </div>
</template>

<script>
import Title from '../templates/Title.vue'

export default {
  data(){
    return {
    }
  },
  components: {
    Title,
  }
}
</script>

<style scoped>
.lineheight {
  line-height: 2rem;
}
</style>