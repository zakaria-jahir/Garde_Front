import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Client/login/login.component';
import { RegisterComponent } from './Client/register/register.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { GardienLoginComponent } from './Gardien/gardien-login/gardien-login.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { ErrorPageComponent } from './Pages/error-page/error-page.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'register', component: RegisterComponent},
  {path:'adminadmin', component:AdminLoginComponent},
  {path:'login/gardien', component:GardienLoginComponent},
  { path: '**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
