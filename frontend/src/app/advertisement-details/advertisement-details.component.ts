import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Advertisement } from '../models';

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.scss'],
})
export class AdvertisementDetailsComponent implements OnInit {
  advertisement: Advertisement;

  constructor(private route: ActivatedRoute, private client: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.client
        .get<Advertisement>(`api/advertisements/${id}`)
        .subscribe((advertisement) => (this.advertisement = advertisement));
    });
  }
}
