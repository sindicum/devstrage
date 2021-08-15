<template>
  <div class="card border-0 m-3">
    <Title title="v-model 選択ボックス" id="vmodelselectbox" />
    <div class="card mt-3 p-3">
      <form>
        <label for="food">すきな食べ物は</label>
        <select id="food" v-model="food">
          <option value="">好きな食べ物を選択して下さい</option>
          <option>りんご</option>
          <option>みかん</option>
          <option>バナナ</option>
        </select> 
      </form>
      <p>回答: {{ food }}</p>
    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./DirectiveVmodelselectbox.txt' 

export default {
  data(){
    return {
      code: Code,
      food: ''
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