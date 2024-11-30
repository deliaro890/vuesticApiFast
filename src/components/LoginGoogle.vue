<template>
  <div>
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
          alt="Profile Picture"
        ></p>
    </div>
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
