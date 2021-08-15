<template>
  <div class="home">
    <Basic />
    <BasicDirective />
    <BasicCompute />
  </div>
</template>

<script>
import Basic from '../components/basic/BasicTop.vue'
import BasicDirective from '../components/basic/BasicDirective.vue';
import BasicCompute from '../components/basic/BasicCompute.vue'

export default {
  name: 'Home',
  components: {
    Basic,
    BasicDirective,
    BasicCompute
  }
}
</script>
