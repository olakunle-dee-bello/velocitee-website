import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CarligyComponent } from './products/carligy/carligy.component';
import { AdsiftComponent } from './products/adsift/adsift.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareerComponent } from './pages/career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CarligyComponent,
    AdsiftComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
