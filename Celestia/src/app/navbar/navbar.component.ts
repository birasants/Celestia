import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@auth0/auth0-angular';
import { SearchService } from '../services/searchService/search.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule, // Importa o módulo de ícones
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userName: string | null = null;

  constructor(private router: Router, public auth: AuthService,  private searchService: SearchService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((authUser) => {
      this.isLoggedIn = !!authUser;
      this.userName = authUser?.name || null;
    });
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchService.setSearchQuery(input.value);
  }

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
