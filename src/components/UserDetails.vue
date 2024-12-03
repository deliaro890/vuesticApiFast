<template>
    <div>
      <h1>User Details</h1>
        <p>Name: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Profile Picture: <img
          :src="user.picture"
          alt="Profile Picture"></p>
    </div>
</template>
  
<script>
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    export default {
    setup() {
        const store = useStore();
        const user = computed(() => store.state.user);

        return { user };
    },
    };
</script>