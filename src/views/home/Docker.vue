<template>
    <div class="docker">
    <div v-for="item in dockerItems"
     :key="item.id"
     :class="{'docker__item': true, 'docker__item--active': item.id === 1}">
      <div class="iconfont" v-html="item.iconCode"></div>
      <div class="docker__title">{{item.dest}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerItems = [
      { id: 1, iconCode: '&#xe6b8;', dest: '首页' },
      { id: 2, iconCode: '&#xe670;', dest: '购物车' },
      { id: 3, iconCode: '&#xe619;', dest: '订单' },
      { id: 4, iconCode: '&#xe6a7;', dest: '我的' }
    ]
    return { dockerItems }
  }
}
</script>

<style lang="scss">
@import '../../style/viriables.scss';
.docker {
  position: absolute;
  display: flex;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  box-shadow: 0 -0.01rem 0.01rem 0 #f1f1f1;
  box-sizing: border-box;
  padding: .07rem .18rem 0 .18rem;
  color: $content-fontcolor;
  &__item{
    flex: 1;
    text-align: center;
    .iconfont{
      font-size: .2rem;
    }
    &--active{
      color:  #1FA4FC;
    }
  }
  &__title{
    font-size: .2rem;
    transform: scale(50%, 50%);
    transform-origin: top;
  }
}
</style>
