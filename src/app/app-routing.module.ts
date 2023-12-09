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

const routes: Routes = [
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'accueil', component:AccueilComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'adminadmin', component:AdminLoginComponent},
  {path:'login/gardien', component:GardienLoginComponent},
  {path:'gardiens', component:RechercheGardienComponent},
  {path:'Apropos', component:AboutComponent},
  {path:'resersation', component:ReservationsComponent},
  {path:'Facture', component:ValidreservationComponent},
  { path: '**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
