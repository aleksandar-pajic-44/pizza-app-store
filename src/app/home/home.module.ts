import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { HomeJumbotronComponent } from './components/home-jumbotron/home-jumbotron.component';
import { HomeOwnedServiceComponent } from './components/home-owned-service/home-owned-service.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeJumbotronComponent,
    HomeOwnedServiceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
