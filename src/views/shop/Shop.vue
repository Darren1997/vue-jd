<template>
    <div class="wrapper">
        <div class="search">
            <div class="search__back iconfont" @click="handleBackClick">&#xe602;</div>
            <div class="search__content">
                <span class="search__content__icon iconfont">&#xe600;</span>
                <input type="text" class="search__content__input" placeholder="请输入商品名称搜索" />
            </div>
        </div>
        <ShopInfo :item="data.item" :hiddenBottonLine="true" v-if="data.item.imgUrl"/>
        <Content />
    </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { reactive } from 'vue'
import ShopInfo from '../../components/shopInfo/ShopInfo.vue'
import Content from './Content.vue'
import { get } from '../../utils/request'

const useGetShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({
    item: {}
  })
  const getShopInfo = async () => {
    const result = await get(`api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    } else {
      console.log('获取商家详情失败！')
    }
  }
  return { data, getShopInfo }
}

const useHandleBackEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

export default {
  name: 'Shop',
  components: {
    ShopInfo,
    Content
  },
  setup () {
    const { data, getShopInfo } = useGetShopInfoEffect()
    getShopInfo()
    const { handleBackClick } = useHandleBackEffect()
    return { data, handleBackClick }
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
