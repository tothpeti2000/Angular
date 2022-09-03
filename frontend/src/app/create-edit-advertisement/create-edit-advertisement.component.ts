import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';
import {
  AdvertisementFormGroup,
  createDto,
  fillFormWithAdvertisementDetails,
} from '.';
import { Advertisement, AdvertisementType } from '../models/advertisement';
import { City } from '../models/city';

@Component({
  selector: 'app-create-edit-advertisement',
  templateUrl: './create-edit-advertisement.component.html',
  styleUrls: ['./create-edit-advertisement.component.scss'],
})
export class CreateEditAdvertisementComponent implements OnInit {
  advertisement: Advertisement = {
    address: '',
    advertisementType: AdvertisementType.House,
    buildDate: 0,
    cityId: 0,
    halfRoom: 0,
    room: 0,
    price: 0,
    size: 0,
  };

  cities: City[];

  form: FormGroup<AdvertisementFormGroup>;

  citySearch = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((cityName) =>
        this.cities
          .filter(
            (city) =>
              city.name.toUpperCase().indexOf(cityName.toUpperCase()) > -1
          )
          .map((city) => city.name)
      )
    );

  get title() {
    const action = this.advertisement.id ? 'szerkesztése' : 'feladása';
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
      (params) => (this.advertisement.id = params['id'])
    );

    this.getCities();

    this.initForm();

    if (this.advertisement.id !== undefined) {
      this.getAdvertisementDetails();
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      address: ['', Validators.required],
      advertisementType: ['', Validators.required],
      buildDate: ['', Validators.required],
      cityZip: ['', [Validators.required, Validators.minLength(4)]],
      cityName: ['', Validators.required],
      description: '',
      room: ['', Validators.required],
      halfRoom: ['', Validators.required],
      price: ['', Validators.required],
      size: ['', Validators.required],
    });
  }

  private getAdvertisementDetails() {
    this.client
      .get<Advertisement>(`api/advertisements/${this.advertisement.id}`)
      .subscribe((details) => {
        this.advertisement = details;

        fillFormWithAdvertisementDetails(this.form, details);
      });
  }

  private getCities() {
    this.client
      .get<City[]>('api/cities')
      .subscribe((cities) => (this.cities = cities));
  }

  setCityNameByZip() {
    const zip = this.form.controls.cityZip.value;

    if (!zip) {
      return;
    }

    const city = this.cities.find((city) => city.zip === zip);

    this.form.controls.cityName.setValue(city?.name);
    this.advertisement.cityId = city?.id ?? 0;
  }

  setCityZipByName() {
    const name = this.form.controls.cityName.value;

    if (!name) {
      return;
    }

    const city = this.cities.find((city) => city.name === name);

    this.form.controls.cityZip.setValue(city?.zip);
    this.advertisement.cityId = city?.id ?? 0;
  }

  handleSubmit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.saveAdvertisement();
    }
  }

  private saveAdvertisement() {
    const dto = createDto(this.form, this.advertisement);

    this.client
      .post('/api/advertisements', dto)
      .subscribe(() => this.router.navigate(['/']));
  }
}
