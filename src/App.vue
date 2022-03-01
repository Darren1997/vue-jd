<template>
  <div class="wrapper">
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
        <div class="icons__item">
          <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img">
          <div class="icons__item__dest">超市便利</div>
        </div>
        <div class="icons__item">
          <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img">
          <div class="icons__item__dest">超市便利</div>
        </div>
        <div class="icons__item">
          <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img">
          <div class="icons__item__dest">超市便利</div>
        </div>
        <div class="icons__item">
          <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img">
          <div class="icons__item__dest">超市便利</div>
        </div>
        <div class="icons__item">
          <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img">
          <div class="icons__item__dest">超市便利</div>
        </div>
        <div class="icons__item">
          <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img">
          <div class="icons__item__dest">超市便利</div>
        </div>
        <div class="icons__item">
          <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img">
          <div class="icons__item__dest">超市便利</div>
        </div>
        <div class="icons__item">
          <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img">
          <div class="icons__item__dest">超市便利</div>
        </div>
        <div class="icons__item">
          <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img">
          <div class="icons__item__dest">超市便利</div>
        </div>
        <div class="icons__item">
          <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img">
          <div class="icons__item__dest">超市便利</div>
        </div>
      </div>
      <div class="gap"></div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6b8;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe670;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe619;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe6a7;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixins.scss';
.wrapper{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: .49rem;
  padding: 0 .18rem;
  // background-color: red;
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
}
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
