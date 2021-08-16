<template>
  <div class="datatransfer">
    <Props your-name="加藤" />
    <Props v-bind:your-name="name" />
    <Props v-for="a in group" :key='a' v-bind:your-name="a"/>
    <Emit />
  </div>
</template>

<script>
import Props from '../components/datatransfer/Props.vue'
import Emit from '../components/datatransfer/Emit.vue'


export default {
  name: 'Home',
  data() {
    return {
      name: "佐藤",
      group: ["鈴木","田中"],
    }
  },
  components: {
    Props,
    Emit
  }
}
</script>
