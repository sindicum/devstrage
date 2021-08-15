<template>
  <div class="card border-0 m-3">
    <Title title="ディレクティブの基礎" />
    <div class="text-secondary lineheight">
      <a href="#vshow">リンク</a>
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