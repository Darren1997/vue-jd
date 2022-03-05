<template>
    <div class="position">
      <div class="position__icon iconfont">&#xe60e;</div>
      北京理工大学国防科技园2号楼10层
      <div class="position__notice iconfont">&#xe601;</div>
      </div>
      <div class="search">
        <div class="search__icon iconfont">&#xe600;</div>
        <div class="search__text">山姆会员商店优惠商品</div>
      </div>
      <div class="banner">
        <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg">
      </div>
      <div class="icons">
        <div class="icons__item" v-for="item in icons" :key="item.id">
          <img :src="`http://www.dell-lee.com/imgs/vue3/${item.imgUrl}.png`" class="icons__item__img">
          <div class="icons__item__dest">{{item.dest}}</div>
        </div>
      </div>
      <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const icons = [
      { id: 1, imgUrl: '超市', dest: '超市便利' },
      { id: 2, imgUrl: '超市', dest: '超市便利' },
      { id: 3, imgUrl: '超市', dest: '超市便利' },
      { id: 4, imgUrl: '超市', dest: '超市便利' },
      { id: 5, imgUrl: '超市', dest: '超市便利' },
      { id: 6, imgUrl: '超市', dest: '超市便利' },
      { id: 7, imgUrl: '超市', dest: '超市便利' },
      { id: 8, imgUrl: '超市', dest: '超市便利' },
      { id: 9, imgUrl: '超市', dest: '超市便利' },
      { id: 10, imgUrl: '超市', dest: '超市便利' }
    ]
    return { icons }
  }
}
</script>

<style lang="scss">
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position{
    padding: .16rem .28rem .16rem .24rem;
    font-size: .16rem;
    color: $content-fontcolor;
    position: relative;
    @include ellipsis;
    &__icon{
      position: absolute;
      left: .012rem;
    }
    &__notice{
      position: absolute;
      right: .012rem;
      top: .16rem;
    }
  }
  .search{
    display: flex;
    line-height: .32rem;
    width: 100%;
    background-color: #F5F5F5;
    border-radius: .16rem;
    padding: 0 .16rem;
    color: #B7B7B7;
    box-sizing: border-box;
    margin-bottom: .12rem;
    &__icon{
      flex: 1;
    }
    &__text{
      flex: 10;
      font-size: .14rem;
      @include ellipsis;
    }
  }
  .banner{
    overflow: hidden;
    height: 0;
    padding-bottom: 25.39%;
    margin-bottom: .16rem;
    &__img{
      display: block;
      width: 100%;
    }
  }
  .icons{
    display: flex;
    flex-wrap: wrap;
    &__item{
      width: 20%;
      margin-bottom: .16rem;
      &__img{
        display: block;
        width: .4rem;
        height: .4rem;
        margin: 0 auto;
        margin-bottom: .06rem;
      }
      &__dest{
        font-size: .12rem;
        text-align: center;
      }
    }
  }
  .gap{
    height: .1rem;
    background-color: #f1f1f1;
    margin: 0 -0.18rem;
  }
</style>
