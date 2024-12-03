<template>
  <div class="loginGoogle-view">
    <LoginGoogle />
  </div>
</template>

<script>
import LoginGoogle from '@/components/LoginGoogle.vue'

export default {
  name: 'LoginGoogleView',
  components: {
    LoginGoogle
  }
}
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
