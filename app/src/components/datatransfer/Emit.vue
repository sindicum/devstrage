<template>
<div>
  <button type="button" v-on:click="onclick" class="btn btn-primary">{{ step }}</button>
</div>
</template>

<script>
export default {
  props: ['step'],
  methods: {
    onclick() {
      this.$emit('plus', Number(this.step));
    },
  }
}
</script>