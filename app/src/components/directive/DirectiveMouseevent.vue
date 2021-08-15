<template>
  <div class="card border-0 m-3">
    <Title title="v-on マウスイベント" id="vonmouseevent" />
    <div class="text-secondary lineheight">
      mouseenterとmouseoverは要素にマウスポインターが乗ったとき、mouseleaveとmouseoutは要素からマウスポインターが外れたときに発生するイベントだが、それぞれの挙動は異なる。
    </div>
    <div class="card mt-3 p-3">
      <div>要素（outer/inner）にマウスを乗せてください</div>
      <div id="outer"
            class="border mx-auto m-3 bg-light"
            @mouseenter="mouseenter"
            @mouseleave="mouseleave"
            @mouseover="mouseover"
            @mouseout="mouseout">外（outer）
        <p id="inner" class="border mx-auto m-3 bg-info">
          内（inner）
        </p>
      </div>
      <table class="mb-5">
        <tr>
          <th>enter/leave</th>
          <th>over/out</th>
        </tr>
        <tr>
          <td style="vertical-align: top;">
            <div v-html="resultenterleave"></div>
          </td>
          <td>
            <div v-html="resultoverout"></div>
          </td>
        </tr>
      </table>
      <form class="mx-auto">
        <input type="button" class="btn btn-primary" value="クリア" @click="onclick">
      </form>
    </div>
    <Highlight :codeprop=code />
  </div>
</template>

<script>
import Title from '../templates/Title.vue'
import Highlight from '../templates/Highlight.vue'
import Code from 'raw-loader!./DirectiveMouseevent.txt' 

export default {
  data(){
    return {
      code: Code,
      resultenterleave: "",
      resultoverout: ""
    }
  },
  components: {
    Title,
    Highlight
  },
  methods: {
    mouseenter: function(e) {
      this.resultenterleave += "Enter:" + e.target.id + "<br />";
    },
    mouseover: function(e) {
      this.resultoverout += "Over:" + e.target.id + "<br />";
    },
    mouseleave: function(e) {
      this.resultenterleave += "Leave:" + e.target.id + "<br />"; 
    },
    mouseout: function(e) {
      this.resultoverout += "Out:" + e.target.id + "<br />"; 
    },
    onclick: function() {
      this.resultenterleave = ""
      this.resultoverout = ""
    }
  }
}
</script>

<style scoped>
.lineheight {
  line-height: 2rem;
}
#outer {
  height: 200px;
  width: 200px;
}
#inner {
  height: 100px;
  width: 100px;
}
.table td.fit, 
.table th.fit {
    white-space: nowrap;
    width: 1%;
}
</style>