<template>
    <pre v-highlightjs="codeprop" class="m-0">
      <code class="javascript"></code>
    </pre>
</template>

<script>
export default {
  props:['codeprop']
}
</script>

<style scoped>
.highlightjs{
  margin-bottom: 0px;
}
</style>