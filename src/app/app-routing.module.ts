import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Client/login/login.component';
import { RegisterComponent } from './Client/register/register.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { GardienLoginComponent } from './Gardien/gardien-login/gardien-login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'register', component: RegisterComponent},
  {path:'adminadmin', component:AdminLoginComponent},
  {path:'login/gardien', component:GardienLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
