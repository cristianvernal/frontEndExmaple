export const environment = {
    production: true,
    azureB2C: {
      clientId: 'T6cc185d2-aca1-412a-86f2-f850cfbc0bb9',  // Reemplaza con tu Application (client) ID
      authority: 'https://proyectoDeTitulo2024.b2clogin.com/proyectoDeTitulo2024.onmicrosoft.com/B2C_1_signupsignin1',
      redirectUri: 'http://localhost:4200', // URI de redirección para producción
      knownAuthorities: ['proyectoDeTitulo2024.b2clogin.com'], // Dominio de tu B2C
      cacheLocation: 'localStorage',
      navigateToLoginRequestUrl: true
    }
  };