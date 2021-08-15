<template>
  <div class="card border-0 m-3">
    <Title title="v-model フォーム" id="vmodelform" />
    <div class="card mt-3 p-3">
      <form>
        <label>入力テキスト</label>
        <input type="text" v-model="inputText" />
      </form><br>
      <div>「{{ inputText }}」と入力されました</div>
    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./DirectiveVmodelform.txt' 

export default {
  data(){
    return {
      inputText: "",
      code: Code,
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