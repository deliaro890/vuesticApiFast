<template>
  <div class="login-container">
    <va-card class="login-card">
      <div class="login-header">
        <img src="@/assets/Logo-calcifer.png" alt="Logo" class="login-logo" />
        <h1 class="login-title">Infinity System</h1>
      </div>
      <va-card-content>
        <GoogleLogin v-if="!userDetails"
        :client-id="clientId"
        :callback="getUserData" 
        auto-login/>
      <div v-if="userDetails">
        <h2>User Details</h2>
        <p>Name: {{ userDetails.name }}</p>
        <p>Email: {{ userDetails.email }}</p>
        <p>Profile Picture: <img
          :src="userDetails.picture"
          alt="Profile Picture"></p>
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script>
import { GoogleLogin, decodeCredential } from "vue3-google-login";

export default {
  components: {
    GoogleLogin
  },
 data() {
    return {
      userDetails: null,
      clientId:process.env.VUE_APP_CLIENT_ID,
      clientSecret:process.env.VUE_APP_CLIENT_SECRET
    };
  },
  name: "YourComponent",
  methods: {
    getUserData(response){
      console.log(response)
      const userData = decodeCredential(response.credential)
      this.userDetails=userData
    }
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