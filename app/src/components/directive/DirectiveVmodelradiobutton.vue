<template>
  <div class="card border-0 m-3">
    <Title title="v-model ラジオボタン" id="vmodelradiobutton" />
    <div class="card mt-3 p-3">
      <form>
        <lable for="dog">いぬ</lable>
        <input type="radio" id="dog" value="いぬ" v-model="pet" />
        <br />
        <lable for="cat">ねこ</lable>
        <input type="radio" id="cat" value="ねこ" v-model="pet" />
        <br />
        <lable for="other">その他</lable>
        <input type="radio" id="other" value="その他" v-model="pet" />
      </form>
      <p>ペット:{{ pet }}</p>
    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./DirectiveVmodelradiobutton.txt' 

export default {
  data(){
    return {
      code: Code,
      pet: 'いぬ'
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