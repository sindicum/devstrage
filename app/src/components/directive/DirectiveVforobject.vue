<template>
  <div class="card border-0 m-3">
    <Title title="v-for オブジェクト" id="vforobject" />
    <div class="text-secondary lineheight">

    </div>
    <div class="card mt-3 p-3">
      <table>
        <ul v-for="a in json" :key="a">{{ a.person.name }}</ul>
      </table>
    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./DirectiveVforobject.txt' 

export default {
  data(){
    return {
      code: Code,
      json: [
        {id:1,person:{ name:'ken',power:1500}},
        {id:2,person:{ name:'toki',power:1300}},
        {id:3,person:{ name:'rao',power:1800}},
      ]
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