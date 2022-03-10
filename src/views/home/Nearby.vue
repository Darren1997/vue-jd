<template>
    <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <ShopInfo v-for="item in nearbyItems" :key="item._id" :item="item"/>
      </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/shopInfo/ShopInfo.vue'

const useNearByEffect = () => {
  const nearbyItems = ref([])
  const getNearByItem = async () => {
    try {
      const result = await get('api/shop/hot-list')
      if (result?.errno === 0 && result?.data.length > 0) {
        nearbyItems.value = result?.data
        // for (const i in nearbyItems.value) {
        //   console.log(nearbyItems.value[i])
        // }
      }
    } catch {
      console.log('失败')
    }
  }
  return { nearbyItems, getNearByItem }
}

export default {
  name: 'Nearby',
  components: {
    ShopInfo
  },
  setup () {
    const { nearbyItems, getNearByItem } = useNearByEffect()
    getNearByItem()
    return { nearbyItems }
  }
}
</script>

<style lang="scss" scoped>
.nearby{
    &__title{
      font-size: .18rem;
      font-weight: 550;
      margin: .16rem 0 .14rem 0;
    }
  }
</style>
