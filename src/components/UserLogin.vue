<template>
  <div class="login-container">
    <va-card>
      <va-card-title>Login</va-card-title>
      <va-form @submit="submitLogin">
        <va-input
          v-model="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          required
        />
        <va-input
          v-model="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          required
        />
        <!-- Apply button alignment and spacing -->
        <va-button class="submit-button" type="submit" block>Login</va-button>
      </va-form>
    </va-card>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: null,
    };
  },
  methods: {
    async submitLogin() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/login_user', {
          email: this.email,
          password: this.password
        }, {
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
          }
        });
        const response2 = response.data;
        return response2;
      } catch (error) {
        this.errorMessage = 'User no registrado';
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.va-card {
  padding: 20px;
}

.va-input {
  margin-bottom: 15px;
}

.submit-button {
  margin-top: 20px;
  width: 100%;
}

.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
