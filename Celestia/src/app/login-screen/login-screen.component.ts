import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((authUser) => {
      if (authUser) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', authUser.name || 'User');
        this.router.navigate(['/']); // Redireciona para a página inicial
      } else {
        // Se o usuário não estiver autenticado, limpe o localStorage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userName');
      }
    });
  }

  loginWithGoogle(): void {
    this.auth.loginWithRedirect({
      authorizationParams: {
        connection: 'google-oauth2',
      },
    });
  }

  loginWithFacebook(): void {
    this.auth.loginWithRedirect({
      authorizationParams: {
        connection: 'facebook',
      },
    });
  }

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }
}
