<template>
  <div class="card border-0 m-3">
    <Title title="v-show" />
    <a id="vshow"></a>
    <div class="text-secondary lineheight">
    </div>
    <div class="card mt-3 p-3">
      <div v-show="error">エラーです</div>
      <button @click="errorinfo">クリック</button>
    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./DirectiveVshow.txt' 

export default {
  data(){
    return {
      code: Code,
      error: false
    }
  },
  components: {
    Title,
    Highlight
  },
  methods: {
    errorinfo: function() {
      this.error = true
    }
  }
}
</script>

<style scoped>
.lineheight {
  line-height: 2rem;
}
</style>