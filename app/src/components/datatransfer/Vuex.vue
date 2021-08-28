<template>
  <div class="card border-0 m-3">
    <Title title="Vuex" id="vuex" />
    <div class="text-secondary lineheight">
      
    </div>
    <div class="card mt-3 p-3">
      <form @submit.prevent="onclick">
        <label for="id">ID:</label>
        <input type="text" id="id" v-model="id" /> <br />
        <label for="title">タイトル:</label>
        <input type="text" id="title" v-model="title" /> <br />
        <label for="price">価格:</label>
        <input type="text" id="price" v-model="price" /> <br />
        <button type="button" @click="onclick">登録</button>
      </form>
      <hr />
      <ul v-for="book in books" :key="book.id">
        <li>ID: {{ book.id }}</li>
        <li>タイトル: {{ book.title }}</li>
        <li>価格 {{ book.price }} 円</li>
      </ul>
      <hr>
      <p>書籍は全部で{{ booksCount }}冊あります。</p>
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
import Code1 from 'raw-loader!./Vuex1.txt' 
import Code2 from 'raw-loader!./Vuex2.txt' 

export default {
  data(){
    return {
      code1: Code1,
      code2: Code2,
      id: '',
      title: '',
      price: 0

    }
  },
  components: {
    Title,
    Highlight
  },
  computed: {
    books() {
      return this.$store.state.books
    },
    booksCount() {
      return this.$store.getters['booksCount']
    }
  },
  methods: {
    onclick() {
      this.$store.commit( 'addBook', {
        book: {
          id: this.id,
          title: this.title,
          price: this.price
        }
      })
    }
  }
}
</script>

<style scoped>
.lineheight {
  line-height: 2rem;
}
</style>