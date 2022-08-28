import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../models/advertisement';

@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
})
export class AdvertisementListComponent implements OnInit {
  advertisements: Advertisement[];

  constructor(private client: HttpClient) {}

  ngOnInit() {
    this.getAdvertisements();
  }

  private getAdvertisements() {
    this.client
      .get<Advertisement[]>('/api/advertisements')
      .subscribe((advertisements) => (this.advertisements = advertisements));
  }
}
