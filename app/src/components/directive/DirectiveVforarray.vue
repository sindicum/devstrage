<template>
  <div class="card border-0 m-3">
    <Title title="v-for 配列" id="vforarray" />
    <div class="text-secondary lineheight">
    </div>
    <div class="card mt-3 p-3">
      <table>
        <th>id</th><th>名前</th><th>パワー</th>
        <tr v-for="b in fighter" :key="b">
          <td>{{ b.id }}</td>
          <td>{{ b.name }}</td>
          <td>{{ b.power }}</td>
        </tr>
      </table>
    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./DirectiveVforarray.txt' 

export default {
  data(){
    return {
      code: Code,
      fighter: [
        {id:1,name:'ken',power:1500},
        {id:2,name:'toki',power:1300},
        {id:3,name:'rao',power:1800}
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