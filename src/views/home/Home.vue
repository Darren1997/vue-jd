<template>
    <div class="wrapper">
      <StaticPart />
      <Nearby />
  </div>
  <Docker />
</template>

<script>
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
import Docker from './Docker.vue'
export default {
  name: 'Home',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>

<style lang="scss" scoped>
// @import '../../style/viriables.scss';
// @import '../../style/mixins.scss';
.wrapper{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: .49rem;
  padding: 0 .18rem;
  overflow-y: auto;
  // background-color: red;
}
</style>
