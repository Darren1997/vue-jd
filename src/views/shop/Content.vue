<template>
    <div class="shop">
        <div class="shop__categories">
            <div class="shop__categories__item shop__categories__item--active">全部商品</div>
            <div class="shop__categories__item">秒杀</div>
            <div class="shop__categories__item">新鲜水果</div>
            <div class="shop__categories__item">休闲食品</div>
            <div class="shop__categories__item">时令蔬菜</div>
            <div class="shop__categories__item">肉蛋家禽</div>
        </div>
        <div class="shop__content">
            <div class="shop__content__item">
                <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="shop__content__img">
                <div class="shop__content__dest">
                    <h3 class="shop__content__title">番茄250g/份</h3>
                    <p class="shop__content__sales">月售10件</p>
                    <div class="shop__content__price">
                        <span class="shop__content__yen">&yen;</span>
                        <span class="shop__content__newPrice">33.6</span>
                        <span class="shop__content__oldPrice">&yen;33.6</span>
                    </div>
                </div>
                <div class="shop__content__control">
                    <div class="shop__content__sub"></div>
                    <div class="shop__content__num">88</div>
                    <div class="shop__content__plus"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="scss" scoped>
.shop{
    display: flex;
    position: absolute;
    top: 1.52rem;
    bottom: .5rem;
    left: 0;
    right: 0;
    &__categories{
        width: .76rem;
        overflow-y: scroll;
        background-color: #f5f5f5;
        &__item{
            line-height: .4rem;
            text-align: center;
            font-size: .14rem;
            color: #333;
            &--active{
                background-color: #fff;
            }
        }
    }
    &__content{
        flex: 1;
        overflow-y: scroll;
        padding: 0 .16rem .16rem .16rem;
        // background-color: red;
        overflow-y: scroll;
        &__item{
            position: relative;
            display: flex;
            padding: .12rem 0;
            border-bottom: .01rem solid #f1f1f1;
            width: 100%;
        }
        &__img{
            width: .68rem;
            height: .68rem;
            margin-right: .16rem;
        }
        &__dest{
            flex: 1;
        }
        &__title{
            font-size: .14rem;
            line-height: .2rem;
            margin: 0 0 .06rem 0;
            color: #333;
        }
        &__sales{
            font-size: .12rem;
            line-height: .16rem;
            color: #333;
            margin: 0 0 .06rem 0;
        }
        &__price{
            line-height: .2rem;
            font-size: .14rem;
        }
        &__yen{
            position: relative;
            bottom: .025rem;
            color: #e93b3b;
            display: inline-block;
            font-size: .2rem;
            transform: scale(50%);
            transform-origin: bottom;
            width: .07rem;
        }
        &__newPrice{
            // display: inline-block;
            // height: .2rem;
            color: #e93b3b;
        }
        &__oldPrice{
            position: relative;
            bottom: .025rem;
            display: inline-block;
            // height: .2rem;
            // line-height: .2rem;
            font-size: .2rem;
            transform: scale(50%);
            transform-origin: bottom;
            margin-left: -0.06rem;
            text-decoration: line-through;
            color: #999999;
        }
        &__control{
            position: absolute;
            display: flex;
            right: 0;
            bottom: .12rem;
            font-size: .14rem;
        }
    }
}
</style>
