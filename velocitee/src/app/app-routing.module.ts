import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdsiftComponent } from './products/adsift/adsift.component';
import { CarligyComponent } from './products/carligy/carligy.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
  },
  {
    path: 'carligy', component: CarligyComponent
  },
  {
    path: 'adsift', component: AdsiftComponent
  },
  {
    path: 'home', component: LandingComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'career', component: CareerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
