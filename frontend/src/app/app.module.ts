import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AdvertisementListComponent } from './advertisement-list/advertisement-list.component';
import { AdvertisementDetailsComponent } from './advertisement-details/advertisement-details.component';
import { CreateEditAdvertisementComponent } from './create-edit-advertisement/create-edit-advertisement.component';
import { FilterComponent } from './filter/filter.component';

import { AdvertisementTypePipe } from './advertisement-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementListComponent,
    AdvertisementDetailsComponent,
    CreateEditAdvertisementComponent,
    FilterComponent,
    AdvertisementTypePipe,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
