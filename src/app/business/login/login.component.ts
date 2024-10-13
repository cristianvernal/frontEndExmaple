// src/app/business/login/login.component.ts
import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="login-container">
      <h1>Login</h1>
      <button (click)="login()">Iniciar sesión</button>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
  `]
})
export default class LoginComponent {
  constructor(private authService: MsalService) {}

  login() {
    this.authService.loginRedirect();
  }
}
