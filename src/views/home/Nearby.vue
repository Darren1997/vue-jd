<template>
    <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <div class="nearby__item" v-for="item in nearbyItems" :key="item.id">
          <img :src="item.imgUrl" class="nearby__img">
          <div class="nearby__content">
            <div class="nearby__content__title">{{item.title}}</div>
            <div class="nearby__content__tags" >
              <span class="nearby__content__tag" v-for="tag in item.tags" :key="tag" v-html="tag" />
            </div>
            <div class="nearby__content__highline">{{item.highline}}</div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyItems = [
      {
        id: 1,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送&yen;0', '基础运费&yen;5'],
        highline: 'VIP尊享满89元减4元运费券（每月3张）'
      }, {
        id: 2,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送&yen;0', '基础运费&yen;5'],
        highline: 'VIP尊享满89元减4元运费券（每月3张）'
      }, {
        id: 3,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送&yen;0', '基础运费&yen;5'],
        highline: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]
    return { nearbyItems }
  }
}
</script>

<style lang="scss">
.nearby{
    &__title{
      font-size: .18rem;
      font-weight: 550;
      margin: .16rem 0 .14rem 0;
    }
    &__item{
      display: flex;
      margin-bottom: .12rem;
      width: 100%;
      box-sizing: border-box;
    }
    &__img{
      width: .56rem;
      height: .56rem;
      margin-right: .16rem;
    }
    &__content{
      // flex:1;
      // flex-wrap: wrap;
      padding-bottom: .12rem;
      border-bottom: .01rem solid #F1F1F1;
      // box-sizing: border-box;
      width: 100%;
      &__title{
        font-size: .16rem;
        line-height: .22rem;
      }
      &__tags{
        line-height: .18rem;
        font-size: .13rem;
        margin: .08rem 0;
      }
      &__tag{
        margin-right:.16rem;
      }
      &__highline{
        line-height: .18rem;
        font-size: .13rem;
        color: #E93B3B;
      }
    }
  }
</style>
