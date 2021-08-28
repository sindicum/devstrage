<template>
  <div class="datatransfer">
    <Title title="親から子 propsオプション（パラメーター）" id="props" />
    <div class="text-secondary lineheight">
      親コンポーネントで定義したパラメーターを子コンポーネントへ受け渡した後、子コンポーネントの内容を親コンポーネントに反映させる。
    </div>
    <Props v-for="name in nameList" :key='name' v-bind:myName="name" yourName="ケンシロウ"/>
    <Highlight :codeprop=codeprops1 />
    <Highlight :codeprop=codeprops2 />
    <Vslot>
      <h1 class="text-danger">ブイスロット</h1>
      <h4 class="text-danger">です</h4>
    </Vslot>
    <Title title="子から親 $emitメソッド" id="emit" />
    <div class="text-secondary lineheight">
      子コンポーネントでなんらかの処理を実行したとき、親コンポーネントに対して変化（イベント）を通知し、関連データ（オブジェクト）を受け渡す。
    </div>
    <div class="card mt-3 p-3">
      <Emit step="1" v-on:plus="onplus" />
      <Emit step="-2" v-on:plus="onplus" />
      <p>現在値:{{ current }}</p>
    </div>
    <Highlight :codeprop=codeemit1 />
    <Highlight :codeprop=codeemit2 />
    <Vuex />
  </div>
</template>

<script>
import Title from '../components/templates/Title.vue'
import Highlight from '../components/templates/Highlight.vue'
import Props from '../components/datatransfer/Props.vue'
import Emit from '../components/datatransfer/Emit.vue'
import Vuex from '../components/datatransfer/Vuex.vue'
import Vslot from '../components/datatransfer/Vslot.vue'
import Codeprops1 from 'raw-loader!../components/datatransfer/Props1.txt'
import Codeprops2 from 'raw-loader!../components/datatransfer/Props2.txt'
import Codeemit1 from 'raw-loader!../components/datatransfer/Emit1.txt'
import Codeemit2 from 'raw-loader!../components/datatransfer/Emit2.txt'


export default {
  name: 'DataTrans',
  data() {
    return {
      nameList: ["ラオウ","トキ"],
      codeprops1: Codeprops1,
      codeprops2: Codeprops2,
      codeemit1: Codeemit1,
      codeemit2: Codeemit2,
      current: 0
    }
  },
  methods: {
    onplus: function(e) {
      this.current += e;
    }
  },
  components: {
    Title,
    Highlight,
    Props,
    Emit,
    Vuex,
    Vslot,
  }
}
</script>
