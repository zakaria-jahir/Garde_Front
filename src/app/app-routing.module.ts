import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Client/login/login.component';
import { RegisterComponent } from './Client/register/register.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { GardienLoginComponent } from './Gardien/gardien-login/gardien-login.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { ErrorPageComponent } from './Pages/error-page/error-page.component';
import { RechercheGardienComponent } from './Pages/recherche-gardien/recherche-gardien.component';
import { AboutComponent } from './Pages/about/about.component';
import { ReservationsComponent } from './Pages/reservations/reservations.component';
import { ValidreservationComponent } from './Pages/validreservation/validreservation.component';
import { DetailGardienComponent } from './Pages/detail-gardien/detail-gardien.component';
import { GardienDashboardComponent } from './Gardien/gardien-dashboard/gardien-dashboard.component';
import { ModifierProfilComponent } from './Gardien/modifier-profil/modifier-profil.component';
import { ProfilClientComponent } from './Client/profil-client/profil-client.component';
import { AdminDashComponent } from './Admin/admin-dash/admin-dash.component';
import { ClientReservationComponent } from './Client/client-reservation/client-reservation.component';
import { UpdateReservationComponent } from './Client/update-reservation/update-reservation.component';
import { GardienReservationComponent } from './Gardien/gardien-reservation/gardien-reservation.component';
import { ClientsComponent } from './Admin/clients/clients.component';
import { AllReservationsComponent } from './Admin/all-reservations/all-reservations.component';
import { GardiensComponent } from './Admin/gardiens/gardiens.component';
import { AddGardienComponent } from './Admin/add-gardien/add-gardien.component';

const routes: Routes = [
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'accueil', component:AccueilComponent},
  {path:'logadmin', component:AdminLoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'Clients', component: ClientsComponent},
  {path:'AllReservations', component: AllReservationsComponent},
  {path:'Gardiens', component: GardiensComponent},
  {path:'addGardien', component: AddGardienComponent},
  {path:'login', component: LoginComponent},
  {path:'adminadmin', component:AdminLoginComponent},
  {path:'login/gardien', component:GardienLoginComponent},
  {path:'gardien/dashboard', component:GardienDashboardComponent},
  {path:'admin/dashboard', component: AdminDashComponent},
  {path:'gardienProfil/:id', component:ModifierProfilComponent},
  {path:'ClientProfil/:id', component:ProfilClientComponent},
  {path:'gardiens', component:RechercheGardienComponent},
  {path:'gardien/:id', component:DetailGardienComponent},
  {path:'Apropos', component:AboutComponent},
  { path: 'client-reservations', component: ClientReservationComponent },
  { path: 'gardien-reservations', component: GardienReservationComponent },
  { path: 'update-reservation/:id', component: UpdateReservationComponent },
  {path:'resersation/:id', component:ReservationsComponent},
  {path:'Facture/:id', component:ValidreservationComponent},
  { path: '**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
