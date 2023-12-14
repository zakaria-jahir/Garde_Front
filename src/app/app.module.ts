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
import {ModifierProfilComponent} from './Gardien/modifier-profil/modifier-profil.component';
import { AboutComponent } from './Pages/about/about.component';
import { ValidreservationComponent } from './Pages/validreservation/validreservation.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GardienDashboardComponent } from './Gardien/gardien-dashboard/gardien-dashboard.component';
import { ProfilClientComponent } from './Client/profil-client/profil-client.component';
import { AdminDashComponent } from './Admin/admin-dash/admin-dash.component';
import { AdminNavComponent } from './Components/admin-nav/admin-nav.component';
import { GardienNavComponent } from './Components/gardien-nav/gardien-nav.component';
import { ClientReservationComponent } from './Client/client-reservation/client-reservation.component';
import { UpdateReservationComponent } from './Client/update-reservation/update-reservation.component';
import { FormsModule } from '@angular/forms';
import { GardienReservationComponent } from './Gardien/gardien-reservation/gardien-reservation.component';
import { ClientsComponent } from './Admin/clients/clients.component';
import { GardiensComponent } from './Admin/gardiens/gardiens.component';
import { AllReservationsComponent } from './Admin/all-reservations/all-reservations.component';
import { AddGardienComponent } from './Admin/add-gardien/add-gardien.component';


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
    ValidreservationComponent,
    GardienDashboardComponent,
    ProfilClientComponent,
    AdminDashComponent,
    AdminNavComponent,
    GardienNavComponent,
    ClientReservationComponent,
    UpdateReservationComponent,
    GardienReservationComponent,
    ClientsComponent,
    GardiensComponent,
    AllReservationsComponent,
    AddGardienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
