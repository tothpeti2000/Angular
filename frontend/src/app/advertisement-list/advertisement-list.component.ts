import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../models/advertisement';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
})
export class AdvertisementListComponent implements OnInit {
  advertisements: Advertisement[];
  filter: Filter = new Filter();

  constructor(private client: HttpClient) {}

  ngOnInit() {
    this.getAdvertisements();
  }

  getAdvertisements() {
    this.client
      .get<Advertisement[]>('/api/advertisements', {
        params: new HttpParams({ fromObject: this.filter as any }),
      })
      .subscribe((advertisements) => (this.advertisements = advertisements));
  }
}
