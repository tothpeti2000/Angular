import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdvertisementDetailsComponent } from './advertisement-details/advertisement-details.component';
import { AdvertisementListComponent } from './advertisement-list/advertisement-list.component';
import { CreateEditAdvertisementComponent } from './create-edit-advertisement/create-edit-advertisement.component';

const routes: Route[] = [
  { path: '', component: AdvertisementListComponent },
  { path: 'details/:id', component: AdvertisementDetailsComponent },
  { path: 'create', component: CreateEditAdvertisementComponent },
  { path: 'edit/:id', component: CreateEditAdvertisementComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
