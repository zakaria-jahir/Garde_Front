import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, tap } from 'rxjs';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  logout!: boolean;
  loggedIn!: boolean;
  idAdmin!: number | undefined;

  constructor(private router: Router,private service: ServicesService) {
    combineLatest([this.service.getLoggedIn(), this.service.getIdAdmin()])
      .pipe(
        tap(([loggedIn, idAdmin]) => {
          this.loggedIn = loggedIn;
          this.idAdmin = idAdmin;
        })
      )
      .subscribe();
      console.log(this.loggedIn);
      console.log(this.idAdmin);
   }

  ngOnInit(): void {
    if (this.idAdmin && this.idAdmin>0) {
      this.service.setLoggedIn(true);
      //this.loggedIn = true;

      console.log(this.loggedIn);
    }
  }
  
  navigateToReservations() {
    this.router.navigate(['/Clients']);
  }
  navigateToGardiens() {
    this.router.navigate(['/Gardiens']);
  }
  navigateToClients() {
    this.router.navigate(['/Clients']);
  }
  navigateToAddGardien(){
    this.router.navigate(['/addGardien']);
  }


  goToProfil(){
    this.router.navigate(['ClientProfil',this.idAdmin]);
  }
  loggout(): void {
    localStorage.removeItem('idAdmin');
    this.service.getIdClient().next(undefined);
    this.loggedIn=false;
    this.router.navigate(['/adminadmin']);
  }
}
