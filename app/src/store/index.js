import { createStore } from 'vuex'

export default createStore({
  strict: true,
  // 本番環境ではFalseにすること 
  namespaced: true,
  state: {
    books: [
      {
        id: '1',
        title: 'さいしょの本',
        price: 1000
      },
      {
        id: '2',
        title: 'つぎの本',
        price: 1200,
      },
      {
        id: '3',
        title: 'おわりの本',
        price: 9999
      }
    ]
  },
  getters: {
    booksCount(state) {
      return state.books.length
    },
    getBooksByPrice(state) {
      return price => {
        return state.books.filter(book => book.price < price )
      }
    }
  },
  mutations: {
    addBook(state, payload) {
      console.log("payloadです")
      console.log(payload)
      console.log("stateです")
      console.log(state)
      state.books.push(payload.book)
    }
  },
  actions: {
  }
})
