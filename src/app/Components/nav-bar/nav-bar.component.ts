import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, tap } from 'rxjs';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logout!: boolean;
  loggedIn!: boolean;
  idClient!: number | undefined;

  constructor(private router: Router,private service: ServicesService) { 
    combineLatest([this.service.getLoggedIn(), this.service.getIdClient()])
      .pipe(
        tap(([loggedIn, idClient]) => {
          this.loggedIn = loggedIn;
          this.idClient = idClient;
        })
      )
      .subscribe();
      console.log(this.loggedIn);
      console.log(this.idClient);

  }

  ngOnInit(): void {
    if (this.idClient && this.idClient>0) {
      this.service.setLoggedIn(true);
      //this.loggedIn = true;

      console.log(this.loggedIn);
    }
  }

  goToProfil(){
    this.router.navigate(['ClientProfil',this.idClient]);
  }
  loggout(): void {
    localStorage.removeItem('clientId');
    this.service.getIdClient().next(undefined);
    this.loggedIn=false;
    this.router.navigate(['/accueil']);
  }

  login(){
    this.router.navigate(['/login']);
  }
  register(){
    this.router.navigate(['/register']);
  }
  navigateToClientReservations() {
    this.router.navigate(['/client-reservations']);
  }

}
