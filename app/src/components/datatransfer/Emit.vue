<template>
  <div class="card border-0 m-3">
    <Title title="子→親 Emit" id="emit" />
    <div class="text-secondary lineheight">

    </div>
    <div class="card mt-3 p-3">

    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./Emit.txt' 

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