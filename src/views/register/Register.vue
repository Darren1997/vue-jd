<template>
    <div class="wrapper">
        <img src="http://www.dell-lee.com/imgs/vue3/user.png" class="wrapper__img">
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" v-model="registerData.username" placeholder="请输入用户名">
        </div>
        <div class="wrapper__input">
            <input type="password" class="wrapper__input__content"
            v-model="registerData.password" placeholder="请输入密码" autocomplete="new-password">
        </div>
        <div class="wrapper__input">
            <input type="password" class="wrapper__input__content"
            v-model="registerData.ensurepwd" placeholder="请确认密码" autocomplete="new-password">
        </div>
        <div class="wrapper__register-button" @click="handleRegisterClick">注册</div>
        <div class="wrapper__register-link" @click="handleLoginClick">
            已有账号去登录
            </div>
        <Toast v-if="toastData.showToast" :message="toastData.toastMessage" />
    </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Toast, { useToastEffect } from '../../components/toast/Toast.vue'
import { post } from '../../utils/request'

const useRouterEffect = () => {
  const router = useRouter()
  const handleRouter = (domain) => {
    router.push({ name: domain })
  }
  return { handleRouter }
}

const useLoginEffect = (handleRouter) => {
  const handleLoginClick = () => {
    handleRouter('Login')
  }
  return { handleLoginClick }
}

const useRegisterEffect = (showToast, handleRouter) => {
  const registerData = reactive({
    username: '',
    password: '',
    ensurepwd: ''
  })
  const handleRegisterClick = async () => {
    if (registerData.username === '') {
      showToast('请输入用户名')
      return 0
    } else if (registerData.password === '') {
      showToast('请输入密码')
      return 0
    } else if (registerData.ensurepwd !== registerData.password) {
      showToast('请确认密码！')
      return 0
    }
    try {
      const result = await post('api/user/register', {
        username: registerData.username,
        password: registerData.password
      })
      console.log(result.errno)
      if (result?.errno === 0) {
        showToast('注册成功！')
        setTimeout(() => {
          handleRouter('Login')
        }, 1000)
      } else {
        showToast('注册失败！')
      }
    } catch {
      showToast('请求失败！')
    }
  }
  return { registerData, handleRegisterClick }
}

export default {
  name: 'Register',
  components: {
    Toast
  },
  setup () {
    const { handleRouter } = useRouterEffect()
    const { handleLoginClick } = useLoginEffect(handleRouter)
    const { toastData, showToast } = useToastEffect()
    const { registerData, handleRegisterClick } = useRegisterEffect(showToast, handleRouter)
    return { registerData, toastData, handleLoginClick, handleRegisterClick }
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
        margin: 0 .4rem .16rem .4rem;
        background: #F9F9F9;
        border: .01rem solid rgba(0,0,0,0.10);
        border-radius: .06rem;
        font-size: .16rem;
        padding: 0 .16rem;
        &__content{
            box-shadow: 0 0 0 10rem #F9F9F9 inset;
            color: $login-fontcolor;
            border: none;
            outline: none;
            background: none;
            width: 100%;
        }
    }
    &__register-button{
        line-height: .48rem;
        text-align: center;
        margin: .32rem .40rem .16rem .40rem;
        background-color: #0091FF;
        border-radius: .04rem;
        box-shadow: 0 .04rem .08rem 0;
        font-size: .16rem;
        color: #FFF;
    }
    &__register-link{
        text-align: center;
        font-size: .14rem;
        color: $login-fontcolor;
    }
}
</style>
