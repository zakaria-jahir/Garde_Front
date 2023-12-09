import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Client/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Client/register/register.component';
import { GardienLoginComponent } from './Gardien/gardien-login/gardien-login.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { ReservationsComponent } from './Pages/reservations/reservations.component';
import { ErrorPageComponent } from './Pages/error-page/error-page.component';
import { RechercheGardienComponent } from './Pages/recherche-gardien/recherche-gardien.component';
import { DetailGardienComponent } from './Pages/detail-gardien/detail-gardien.component';
import {MatSelectModule} from '@angular/material/select';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ModifierProfilComponent } from './Client/modifier-profil/modifier-profil.component';
import { AboutComponent } from './Pages/about/about.component';
import { ValidreservationComponent } from './Pages/validreservation/validreservation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GardienLoginComponent,
    AdminLoginComponent,
    AccueilComponent,
    ReservationsComponent,
    ErrorPageComponent,
    RechercheGardienComponent,
    DetailGardienComponent,
    NavBarComponent,
    FooterComponent,
    ModifierProfilComponent,
    AboutComponent,
    ValidreservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
