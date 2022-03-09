<template>
    <div class="wrapper">
        <img src="http://www.dell-lee.com/imgs/vue3/user.png" class="wrapper__img">
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" v-model="loginData.username" placeholder="请输入用户名">
        </div>
        <div class="wrapper__input">
            <input type="password" class="wrapper__input__content" v-model="loginData.password" placeholder="请输入密码" autocomplete="new-password">
        </div>
        <div class="wrapper__login-button" @click="handleLoginClick">登录</div>
        <div class="wrapper__login-link" @click="handleRegisterClick">
            <!-- <div class="wrapper__login-link__register"></div>-->立即注册
            </div>
        <Toast v-if="toastData.showToast" :message="toastData.toastMessage" />
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/toast/Toast.vue'

const useLoginEffect = (showToast) => {
  const router = useRouter()
  const loginData = reactive({
    username: '',
    password: ''
  })
  const handleLoginClick = async () => {
    try {
      const result = await post('api/user/login', {
        username: loginData.username,
        password: loginData.password
      })
      if (result?.errno === 0) {
        // alert('success')
        localStorage.islogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败！')
      }
    } catch {
      showToast('请求失败！')
    }
  }
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { loginData, handleLoginClick, handleRegisterClick }
}

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    // setup函数的职责是告诉你代码执行的流程
    const { toastData, showToast } = useToastEffect()

    const { loginData, handleLoginClick, handleRegisterClick } = useLoginEffect(showToast)

    return { handleLoginClick, handleRegisterClick, loginData, toastData }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper{
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &__img{
        display: block;
        margin: 0 auto .4rem auto;
        width: .66rem;
        height: .66rem;
        border-radius: 50%;
    }
    &__input{
        box-sizing: border-box;
        line-height: .48rem;
        border-radius: .06rem;
        padding: 0 .16rem;
        margin: 0 .4rem .16rem .4rem;
        background: #F9F9F9;
        border: .01rem solid rgba(0,0,0,0.10);
        border-radius: .06rem;
        font-size: .16rem;
        &__content{
            color: $login-fontcolor;
            border: none;
            outline: none;
            box-shadow: 0 0 0 10rem #F9F9F9 inset;
            // background-color: #F9F9F9;
            width: 100%;
        }
    }
    &__login-button{
        line-height: .48rem;
        text-align: center;
        margin: .32rem .40rem .16rem .40rem;
        background-color: #0091FF;
        border-radius: .04rem;
        box-shadow: 0 .04rem .08rem 0;
        font-size: .16rem;
        color: #FFF;
    }
    &__login-link{
        text-align: center;
        font-size: .14rem;
        color: $login-fontcolor;
    }
}
</style>
