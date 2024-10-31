<template>
  <div>
    <button @click="login">Login Using Google</button>
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
import { googleSdkLoaded } from "vue3-google-login";
import axios from "axios";

export default {
 data() {
    return {
      userDetails: null
    };
  },
  name: "YourComponent",
  methods: {
    login() {
      googleSdkLoaded(google => {
        google.accounts.oauth2
          .initCodeClient({
            client_id:
              process.env.VUE_APP_CLIENT_ID,
            scope: "email profile openid",
            redirect_uri: "http://localhost:8080",
            callback: response => {
              if (response.code) {
                this.sendCodeToBackend(response.code);
              }
            }
          })
          .requestCode();
      });
    },
    async sendCodeToBackend(code) {
      try {
        const response = await axios.post(
          "https://oauth2.googleapis.com/token",
          {
            code,
            client_id:
            process.env.VUE_APP_CLIENT_ID,
            client_secret: process.env.VUE_APP_CLIENT_SECRET,
            redirect_uri: "postmessage",
            grant_type: "authorization_code"
          }
        );

        const accessToken = response.data.access_token;
        console.log(accessToken);

        // Fetch user details using the access token
        const userResponse = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );

        if (userResponse && userResponse.data) {
          // Set the userDetails data property to the userResponse object
          this.userDetails = userResponse.data;
        } else {
          // Handle the case where userResponse or userResponse.data is undefined
          console.error("Failed to fetch user details.");
        }
      } catch (error) {
        console.error("Token exchange failed:", error.response.data);
      }
    }
  }
};
</script>
