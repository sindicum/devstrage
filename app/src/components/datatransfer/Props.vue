<template>
  <div class="card border-0 m-3">
    <Title title="親→子 Props" id="props" />
    <div class="text-secondary lineheight">

    </div>
    <div class="card mt-3 p-3">
      <div v-bind:id="yourName">こんにちは、{{ yourName }}さん！</div>
    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./Props.txt' 

export default {
  data(){
    return {
      code: Code,
    }
  },
  props: [ 'yourName' ],
  components: {
    Title,
    Highlight
  },
  methods: {
  },
}
</script>

<style scoped>
.lineheight {
  line-height: 2rem;
}
</style>