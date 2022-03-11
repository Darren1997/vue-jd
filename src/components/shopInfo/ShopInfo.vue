<template>
    <div class="shop">
          <img :src="item.imgUrl" class="shop__img">
          <div class="shop__content"
          :class="{'shop__content': true, 'shop__content--bordered': hiddenBottonLine? false: true}">
            <div class="shop__content__title">{{item.name}}</div>
            <div class="shop__content__tags" >
              <span class="shop__content__tag"  v-html="`月售${item.sales}+`" />
              <span class="shop__content__tag"  v-html="`起送&yen;${item.expressLimit}`" />
              <span class="shop__content__tag"  v-html="`基础运费&yen;${item.expressPrice}`" />
            </div>
            <div class="shop__content__highline">{{item.slogan}}</div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hiddenBottonLine']
}
</script>

<style lang="scss" scoped>
.shop{
    display: flex;
    margin-bottom: .12rem;
    width: 100%;
    box-sizing: border-box;
    &__img{
      width: .56rem;
      height: .56rem;
      margin-right: .16rem;
    }
    &__content{
      // flex:1;
      // flex-wrap: wrap;
      padding-bottom: .12rem;
      color: #333;
      &--bordered{
         border-bottom: .01rem solid #F1F1F1;
      }
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
