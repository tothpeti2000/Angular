import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Advertisement } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  advertisements: Advertisement[];
  navbarCollapsed = true;

  constructor(private client: HttpClient) {}

  ngOnInit() {
    this.client
      .get<Advertisement[]>('/api/advertisements')
      .subscribe((advertisements) => (this.advertisements = advertisements));
  }

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
