import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AdvertisementListComponent } from './advertisement-list/advertisement-list.component';
import { AdvertisementDetailsComponent } from './advertisement-details/advertisement-details.component';
import { CreateEditAdvertisementComponent } from './create-edit-advertisement/create-edit-advertisement.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementListComponent,
    AdvertisementDetailsComponent,
    CreateEditAdvertisementComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
