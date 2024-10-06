<template>
  <div class="update-view">
    <UserUpdateForm />
  </div>
</template>

<script>
import UserUpdateForm from '@/components/UserUpdateForm.vue'

export default {
  name: 'UserUpdateFormView',
  components: {
    UserUpdateForm
  }
}
</script>

<style scoped>
.update-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
