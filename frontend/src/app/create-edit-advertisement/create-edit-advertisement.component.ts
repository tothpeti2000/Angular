import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AdvertisementFormGroup,
  createDto,
  fillFormWithAdvertisementDetails,
} from '.';
import { Advertisement } from '../models/advertisement';

@Component({
  selector: 'app-create-edit-advertisement',
  templateUrl: './create-edit-advertisement.component.html',
  styleUrls: ['./create-edit-advertisement.component.scss'],
})
export class CreateEditAdvertisementComponent implements OnInit {
  advertisementId: number;

  form: FormGroup<AdvertisementFormGroup>;

  get title() {
    const action = this.advertisementId ? 'szerkesztése' : 'feladása';

    return `Hirdetés ${action}`;
  }

  constructor(
    private formBuilder: FormBuilder,
    private client: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params) => (this.advertisementId = params['id'])
    );

    this.initForm();

    if (this.advertisementId !== undefined) {
      this.getAdvertisementDetails();
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      address: ['', Validators.required],
      advertisementType: ['', Validators.required],
      buildDate: ['', Validators.required],
      cityZip: ['', Validators.required],
      cityName: ['', Validators.required],
      description: ['', Validators.required],
      room: ['', Validators.required],
      halfRoom: ['', Validators.required],
      price: ['', Validators.required],
      size: ['', Validators.required],
    });
  }

  getAdvertisementDetails() {
    this.client
      .get<Advertisement>(`api/advertisements/${this.advertisementId}`)
      .subscribe((details) =>
        fillFormWithAdvertisementDetails(this.form, details)
      );
  }

  saveAdvertisement() {
    const dto = createDto(this.form);

    this.client
      .post('/api/advertisements', dto)
      .subscribe(() => this.router.navigate(['/']));
  }
}
