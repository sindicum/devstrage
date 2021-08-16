<template>
  <nav class="nav flex-column sidebar">
    <div v-for="menu in menulist" :key="menu">
      <router-link
        class="nav-link p-3 text-dark divcursor"
        :class="`${menu['mainmenubgcolor']}`"
        @click="accordionmenu(menu)"
        :to="`${menu['mainmenu']['mainLink']}`">
      {{ menu['mainmenu']['mainTitle']}}
      </router-link>
      <div v-show="menu['isOpened']" v-for="submenu in menu['submenu']" :key="submenu">
        <router-link
          class="nav-link px-4 py-2 text-dark y200hover" 
          :to="`${submenu['subLink']}`">
        {{ submenu['subTitle'] }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return {
      menulist: [
        {
          mainmenu: { mainTitle:"基本", mainLink: "/" },
          submenu: [
            { subTitle: "ディレクティブ", subLink: "/#directive" },
            { subTitle: "算出プロパティとメソッド", subLink: "/#compute" },

          ],
          isOpened: false,
          mainmenubgcolor: "" 
        },
        {
          mainmenu: { mainTitle:"ディレクティブ", mainLink: "/directive" },
          submenu: [
            { subTitle: "v-on", subLink: "/directive#von" },
            { subTitle: "v-on マウスイベント", subLink: "/directive#vonmouseevent" },
            { subTitle: "v-model", subLink: "/directive#vmodel" },
            { subTitle: "v-model フォーム", subLink: "/directive#vmodelform" },
            { subTitle: "v-model ラジオボタン", subLink: "/directive#vmodelradiobutton" },
            { subTitle: "v-model チェックボックス", subLink: "/directive#vmodelcheckbox" },
            { subTitle: "v-model 選択ボックス", subLink: "/directive#vmodelselectbox" },
            { subTitle: "v-for", subLink: "/directive#vfor" },
            { subTitle: "v-for 配列", subLink: "/directive#vforarray" },
            { subTitle: "v-for オブジェクト", subLink: "#vforobject" },
            { subTitle: "v-show", subLink: "/directive#vshow" },
            { subTitle: "v-bind", subLink: "/directive#vbind" },
          ],
          isOpened: false,
          mainmenubgcolor: "" 
        },
        {
          mainmenu: { mainTitle:"データの管理と通信", mainLink: "/datatransfer" },
          submenu: [
            { subTitle: "親から子 propsオプション", subLink: "/datatransfer#props" },
            { subTitle: "子から親 emitメソッド", subLink: "/datatransfer#emit" },
            { subTitle: "アプリ全体 Vuex", subLink: "/datatransfer#vuex" },

          ],
          isOpened: false,
          mainmenubgcolor: "" 
        },
      ],
    }
  },
  methods: {
    accordionmenu(obj) {
      obj.isOpened = !obj.isOpened
      if (obj.isOpened == true) {
        obj['mainmenubgcolor'] = "bg-warning"
      } else {
        obj['mainmenubgcolor'] = ""
      }
    },
  },
}
</script>

<style scoped>
.sidebar {
  position: sticky;
  top: 0px;
}
.divcursor {
  cursor: pointer;
}
/* .y500hover:hover {
  background-color:#ffc107;
} */
.y200hover:hover {
  background-color:#ffe69c;
}
</style>