// src/app/auth/auth.module.ts
import { NgModule } from '@angular/core';
import { MsalModule, MsalGuard, MsalInterceptor, MsalGuardConfiguration, MsalInterceptorConfiguration } from '@azure/msal-angular';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { RouterModule } from '@angular/router';

const isIE = window.navigator.userAgent.includes('MSIE ') || window.navigator.userAgent.includes('Trident/');

const msalConfig = {
  auth: {
    clientId: '6cc185d2-aca1-412a-86f2-f850cfbc0bb9', // Reemplaza con tu Client ID
    authority: 'https://proyectoDeTitulo2024.b2clogin.com/proyectoDeTitulo2024.onmicrosoft.com/B2C_1_signupsignin1', // Cambia a tu URI de autoridad
    redirectUri: 'http://localhost:4200/login', // URI de redirección para desarrollo
    postLogoutRedirectUri: 'http://localhost:4200/login', // URI a la que redirigir después del cierre de sesión
  },
  cache: {
    cacheLocation: 'localStorage', // O 'sessionStorage'
    storeAuthStateInCookie: isIE, // Si es Internet Explorer, almacenar el estado de autenticación en cookies
  }
};

const msalGuardConfig: MsalGuardConfiguration = {
  interactionType: InteractionType.Redirect,
  authRequest: {
    scopes: ['openid', 'profile'] // Cambia los scopes según tu configuración
  }
};

const msalInterceptorConfig: MsalInterceptorConfiguration = {
  interactionType: InteractionType.Redirect,
  protectedResourceMap: new Map([
    ['https://graph.microsoft.com/v1.0/me', ['User.Read']] // Ajusta según tus recursos protegidos
  ])
};

@NgModule({
  imports: [
    MsalModule.forRoot(
      new PublicClientApplication(msalConfig),
      msalGuardConfig,
      msalInterceptorConfig
    ),
    RouterModule.forChild([]) // Si no tienes rutas específicas para el módulo de autenticación, deja esto vacío
  ],
  providers: [MsalGuard, MsalInterceptor],
})
export class AuthModule { }
