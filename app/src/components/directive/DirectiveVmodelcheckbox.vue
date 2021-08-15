<template>
  <div class="card border-0 m-3">
    <Title title="v-model チェックボックス" id="vmodelcheckbox" />
    <div class="card mt-3 p-3">
      <form>
        <div>お使いのOSは?</div>
        <label for="windows">Windows</label>
        <input type="checkbox" id="windows" value="Windows" v-model="os" />
        <label for="linux">Linux</label>
        <input type="checkbox" id="linux" value="Linux" v-model="os" />
        <label for="mac">MacOS</label>
        <input type="checkbox" id="mac" value="macOS" v-model="os" />
      </form>
      <p>回答:{{ os }}</p>
    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./DirectiveVmodelcheckbox.txt' 

export default {
  data(){
    return {
      code: Code,
      os: ['Windows', 'macOS']
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