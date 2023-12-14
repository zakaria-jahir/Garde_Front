import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest , tap} from 'rxjs';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-gardien-nav',
  templateUrl: './gardien-nav.component.html',
  styleUrls: ['./gardien-nav.component.css']
})
export class GardienNavComponent implements OnInit {
  logout!: boolean;
  loggedIn!: boolean;
  idGardien!: number | undefined;

  constructor(private router: Router,private service: ServicesService) { 
    combineLatest([this.service.getLoggedIn(), this.service.getIdGardien()])
    .pipe(
      tap(([loggedIn, idGardien]) => {
        this.loggedIn = loggedIn;
        this.idGardien = idGardien;
      })
    )
    .subscribe();
    console.log(this.loggedIn);
    console.log(this.idGardien);
  }

  ngOnInit(): void {
    if (this.idGardien && this.idGardien>0) {
      this.service.setLoggedIn(true);
      //this.loggedIn = true;

      console.log(this.loggedIn);
    }
  }
  goToProfil(){
    this.router.navigate(['/gardienProfil',this.idGardien]);
  }
  loggout(): void {
    localStorage.removeItem('idGardien');
    this.service.getIdGardien().next(undefined);
    this.loggedIn=false;
    this.router.navigate(['/login/gardien']);
  }
  navigateToGardienReservations() {
    this.router.navigate(['/gardien-reservations']);
  }

}
