<template>
  <div class="card border-0 m-3">
    <Title title="v-on 基礎" id="von" />
    <div class="text-secondary lineheight">
      <div>イベントハンドラー（ある出来事を切っ掛けに実行されるコード）を設定</div>
    </div>
    <Highlight :codeprop=example />
    <div class="text-secondary lineheight">ボタンクリック（イベント）でonclickメソッドを実行</div>
    <div class="card mt-3 p-3">
      <form>
        <input type="button" class="btn btn-primary" value="クリック" @click="onclick">
        <div>{{ message }}</div>
      </form>
    </div>
    <Highlight :codeprop=code />
    <table class="table table-bordered">
      <tr class="text-center bg-dark text-light">
        <th>分類</th>
        <th>イベント名</th><th>概要</th>
      </tr>
      <tr>
        <th rowspan="5">フォーム</th>
        <td>focus</td><td>要素にフォーカスが入ったとき</td>
      </tr>
      <tr>
        <td>blur</td><td>要素からフォーカスが外れたとき</td>
      </tr>
      <tr>
        <td>change</td><td>要素の値を変更したとき</td>
      </tr>
      <tr>
        <td>select</td><td>テキストボックス／テキストエリアのテキストを選択したとき</td>
      </tr>
      <tr>
        <td>submit</td><td>フォームから送信したとき</td>
      </tr>
      <tr>
        <th rowspan="9">マウス</th>
        <td>click</td><td>要素をクリックしたとき</td>
      </tr>
      <tr>
        <td>dbclick</td><td>要素をダブルクリックしたとき</td>
      </tr>
      <tr>
        <td>mousedonw</td><td>マウスのボタンを押したとき</td>
      </tr>
      <tr>
        <td>mouseover</td><td>要素にマウスポインターが乗ったとき</td>
      </tr>
      <tr>
        <td>mouseenter</td><td>要素にマウスポインターが乗ったとき</td>
      </tr>
      <tr>
        <td>mouseleave</td><td>要素からマウスポインターが外れたとき</td>
      </tr>
      <tr>
        <td>mouseout</td><td>要素からマウスポインターが外れたとき</td>
      </tr>
      <tr>
        <td>mousemove</td><td>要素の中をマウスポインターが移動したとき</td>
      </tr>
      <tr>
        <td>mouseup</td><td>マウスのボタンを放したとき</td>
      </tr>
      <tr>
        <th rowspan="3">キー</th>
        <td>keydown</td><td>キーを押したとき</td>
      </tr>
      <tr>
        <td>keyup</td><td>キーを離したとき</td>
      </tr>
      <tr>
        <td>keypress</td><td>キーを押し続けているとき</td>
      </tr>
      <tr>
        <th rowspan="4">その他</th>
        <td>resize</td><td>ウィンドウのサイズを変更したとき</td>
      </tr>
      <tr>
        <td>scroll</td><td>ページや要素をスクロールしたとき</td>
      </tr>
      <tr>
        <td>error</td><td>ページ内でエラーが発生したとき</td>
      </tr>
      <tr>
        <td>contextmenu</td><td>コンテキストメニューを表示する前</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./DirectiveVon.txt' 

export default {
  data(){
    return {
      example: "v-on:イベント名='メソッド'\n// 省略構文\n@イベント名='メソッド'",
      code: Code,
      message: ''
    }
  },
  components: {
    Title,
    Highlight
  },
  methods: {
    onclick: function() {
      this.message = new Date().toLocaleString();
    },
  }
  
}
</script>

<style scoped>
.lineheight {
  line-height: 2rem;
}
</style>