import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
    }
    this.user = sessionStorage.getItem('user');
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
