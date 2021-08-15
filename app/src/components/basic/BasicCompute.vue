<template>
  <div class="card border-0 m-3">
    <Title title="算出プロパティとメソッド" id="compute" />
    <div class="text-secondary lineheight">
      <div>テンプレートは任意のJavaScript式を埋め込むことが出来るが、可読性の観点から単純なプロパティを参照するに留め、演算やメソッドの呼び出しはできるだけコード側に委ねた方が良く、算出プロパティを用いる。</div>
      <br>
      <div>下記のデモ例で、メソッドはボタンクリックで常に乱数が変化するが、算出プロパティは変化しない。</div>
    </div>
    <div class="card mt-3 p-3">
        <form>
          <input type="button" value="クリック" v-on:click="onclick" />
        </form>
        <div>算出プロパティ：{{ randomc }}</div>
        <div>メソッド：{{ randomm() }}</div>
        <div>現在日時：{{ current }}</div>
    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./BasicCompute.txt' 

export default {
  data(){
    return {
      code: Code,
      current: new Date().toLocaleString(),
    }
  },
  computed: {
    // 算出プロパティ：引数を持てない、データの加工を伴う取得、値のキャッシュ
    randomc: function() {
      return Math.random();
    }
  },
  methods: {
    onclick: function() {
      this.current = new Date().toLocaleString();
    },
    randomm: function() {
      return Math.random();
    }
  },
  components: {
    Title,
    Highlight
  }
}
</script>

<style scoped>
.lineheight {
  line-height: 2rem;
}
</style>