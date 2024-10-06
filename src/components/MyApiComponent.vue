<template>
  <div>
    <va-card>
      <h2>API Data from FastAPI</h2>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <ul>
          <!--<li v-for="item in items" :key="item.item_id">{{ item.item_id }} - {{ item.q }}</li>-->
          <p>{{response[0]}}</p>
        </ul>
      </div>
    </va-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      items: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get('http://127.0.0.1:8000');
        this.response = [response.data.message]; 
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
</style>
