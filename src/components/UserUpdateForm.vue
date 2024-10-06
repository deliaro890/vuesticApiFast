<template>
  <div class="update-container">
    <va-card>
      <va-card-title>Update</va-card-title>
      <va-form @submit="submitUpdate">
        <va-input
          v-model="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          required
        />
        <!-- Apply button alignment and spacing -->
        <va-button class="submit-button" type="submit" block>Update</va-button>
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
      errorMessage: null,
    };
  },
  methods: {
    async submitUpdate() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/return_user', {
          email: this.email
        }, {
          headers: { 'Content-Type': 'application/json' },
        });
        const response2 = response.data;
        return response2;
      } catch (error) {
        this.errorMessage = 'Error!!';
      }
    }
  }
};
</script>

<style scoped>
.update-container {
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
