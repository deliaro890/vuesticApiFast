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
        <va-input
          v-model="name"
          label="Name"
          placeholder="Enter your name"
          type="text"
          required
        />
        <va-input
          v-model="lastName"
          label="Last Name"
          placeholder="Enter your last name"
          type="text"
          required
        />
        <va-input
          v-model="age"
          label="Age"
          placeholder="Enter your age"
          type="number"
          required
        />
        <va-input
          v-model="countryLada"
          label="Country Lada"
          placeholder="Enter your country lada"
          type="text"
          required
        />
        <va-input
          v-model="phone"
          label="Phone"
          placeholder="Enter your phone number"
          type="tel"
          required
        />
        <va-input
          v-model="gender"
          label="Gender"
          placeholder="Enter your gender"
          type="text"
          required
        />
        <va-input
          v-model="avatar"
          label="Avatar URL"
          placeholder="Enter your avatar URL"
          type="text"
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
        <va-button class="submit-button" type="submit" block>Register</va-button>
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
      name: '',
      lastName: '',
      age: '',
      countryLada: '',
      phone: '',
      gender: '',
      avatar: '',
      password: '',
      errorMessage: null,
    };
  },
  methods: {
    async submitRegister() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/crea_nuevo_usuario', {
          email: this.email,
          name: this.name,
          last_name: this.lastName,
          age: +this.age,
          country_lada: this.countryLada,
          phone: this.phone,
          gender: this.gender,
          url_avatar: this.avatar,
          password: this.password
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
