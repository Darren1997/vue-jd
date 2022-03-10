<template>
    <div class="wrapper">
        <div class="search">
            <div class="search__back iconfont">&#xe602;</div>
            <div class="search__content">
                <span class="search__content__icon iconfont">&#xe600;</span>
                <input type="text" class="search__content__input" placeholder="请输入商品名称搜索" />
            </div>
        </div>
        <ShopInfo :item="item" :hiddenBottonLine="true"/>
    </div>
</template>

<script>
import ShopInfo from '../../components/shopInfo/ShopInfo.vue'
export default {
  name: 'Shop',
  components: {
    ShopInfo
  },
  setup () {
    const item = {
      expressLimit: 0,
      expressPrice: 5,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      name: '沃尔玛',
      sales: 10000,
      slogan: 'VIP尊享满89元减4元运费券',
      _id: '1'
    }
    return { item }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
    padding: 0 .18rem;
    .search{
        display: flex;
        margin: .16rem 0;
        &__back{
            line-height: .32rem;
            margin: 0 .1rem 0 0;
            font-size: .3rem;
            color: #b6b6b6;
        }
        &__content{
            flex: 1;
            display: flex;
            border-radius: .16rem;
            background-color: #f5f5f5;
            &__icon{
                display: inline-block;
                height: .32rem;
                line-height: .32rem;
                font-size: .18rem;
                margin: 0 .12rem 0 .16rem;
            }
            &__input{
                border: none;
                outline: none;
                background: none;
                width: 100%;
                line-height: .32rem;
                height: .32rem;
                font-size: .14rem;
                padding-right: .16rem;
            }
        }
    }
}
</style>
