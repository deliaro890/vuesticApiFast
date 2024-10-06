<template>
  <div class="signup-view">
    <UserSignUp />
  </div>
</template>

<script>
import UserSignUp from '@/components/UserSignUp.vue'

export default {
  name: 'SignUpView',
  components: {
    UserSignUp
  }
}
</script>

<style scoped>
.signup-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
