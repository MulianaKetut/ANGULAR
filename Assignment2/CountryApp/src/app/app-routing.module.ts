import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCountryComponent } from './components/all-country/all-country.component';
import { DetailCountryComponent } from './components/detail-country/detail-country.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'all-country', component: AllCountryComponent },
  { path: 'country-detail/:id', component: DetailCountryComponent },
  // { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
