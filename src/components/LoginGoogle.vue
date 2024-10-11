<template>
  <div id="google-login-button"></div>
</template>

<script>
export default {
  mounted() {
    // Función de inicialización de Google
    const initializeGoogleLogin = () => {
      if (window.google && window.google.accounts) {
        google.accounts.id.initialize({
          client_id: process.env.VUE_APP_CLIENT_ID,
          callback: this.handleCredentialResponse,
        });

        google.accounts.id.renderButton(
          document.getElementById('google-login-button'),
          { theme: 'outline', size: 'large' }
        );
      }
    };

    // Verificar si el script de Google ya está cargado
    if (!window.google) {
      // Cargar el script de Google si aún no está disponible
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = initializeGoogleLogin;
      document.head.appendChild(script);
    } else {
      // Si ya está cargado, inicializar directamente
      initializeGoogleLogin();
    }
  },
  methods: {
    handleCredentialResponse(response) {
      const token = response.credential;
      console.log('TOKEN!: ', token);
      // Aquí puedes enviar el token a tu backend
    },
  },
};
</script>
