<template>
  <div class="card border-0 m-3">
    <Title title="親から子 v-slot（HTML）" id="vslot" />
    <div class="text-secondary lineheight">
      親で定義したHTMLコードを子へ受け渡した後、子コンポーネントの内容を親コンポーネントに反映させる。
    </div>
    <div class="card mt-3 p-3">
      <p>以下にv-slotが差し込まれます</p>
      <slot>v-slot?</slot>
    </div>
    <div>
    <Highlight :codeprop=code1 />
    <Highlight :codeprop=code2 />
    </div>
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code1 from 'raw-loader!./Vslot1.txt' 
import Code2 from 'raw-loader!./Vslot2.txt' 

export default {
  data(){
    return {
      code1: Code1,
      code2: Code2,
    }
  },
  components: {
    Title,
    Highlight
  },
  computed: {
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