<template>
  <div class="login-container">
    <va-card class="login-card">
      <div class="login-header">
        <img src="@/assets/Logo-calcifer.png" alt="Logo" class="login-logo" />
        <h1 class="login-title">Infinity System</h1>
      </div>
      <va-card-content>
        <GoogleLogin
        :client-id="clientId"
        :callback="getUserData" 
        auto-login/>
      </va-card-content>
    </va-card>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { GoogleLogin, decodeCredential } from "vue3-google-login";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';

export default {

  setup(){
    const router = useRouter();
    const store = useStore();
    const getUserData =  (response) => {
      const userData = decodeCredential(response.credential)
        store.commit('setUser', userData);
        router.push('/dashboard');
    };
    onMounted(()=>{
    const clientId = ref(process.env.VUE_APP_CLIENT_ID);
    console.log(clientId)
    const clientSecret = ref(process.env.VUE_APP_CLIENT_SECRET);
    return (clientId, clientSecret)
  })
    return( getUserData)
  }
};
</script>
<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
}

.login-card {
  width: 400px;
}

.login-header {
  text-align: center;
  margin-bottom: 1.2rem;
}

.login-logo {
  margin-top: 1.2rem;
  width: 100px;
  height: auto;
}

.login-title {
  margin-top: 10px;
  font-size: 2.2rem;
}
</style>