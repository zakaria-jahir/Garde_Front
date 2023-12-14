import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-gardien-reservation',
  templateUrl: './gardien-reservation.component.html',
  styleUrls: ['./gardien-reservation.component.css']
})
export class GardienReservationComponent implements OnInit {

  reservations: any[] = [];
  gardienId:  number | undefined ;

  constructor(private service: ServicesService,private router: Router) { }

  ngOnInit(): void {
    this.gardienId = this.service.getIdGardien().value;
    console.log(this.gardienId);
    if (this.gardienId !== undefined) {
      this.getAdminReservations();
    } else {
      console.error('gardien ID is undefined. Unable to fetch reservations.');
    }
  }

  getAdminReservations() {
    this.service.getAdminReservations(this.gardienId!).subscribe(
      (res) => {
        console.log('Response from server:', res);
        this.reservations = res;
      },
      (error) => {
        console.error('Error fetching client reservations:', error);
      }
    );
  }
  updateReservation(reservationId: number): void {
    // Redirect to the update-reservation component with the reservation ID
    this.router.navigate(['/update-reservation', reservationId]);
  }


  deleteReservation(reservationId: number): void {
    this.service.deleteReservation(reservationId).subscribe(
      (Response) => {
        // Handle success (e.g., refresh reservation list)
        this.getAdminReservations();
      },
      (error) => {
        console.error('Error deleting reservation:', error);
  
        // Check if the error is due to a parsing issue
        if (error instanceof HttpErrorResponse && error.status === 200) {
          // Ignore the parsing error if the status is 200
          console.warn('Parsing error ignored for 200 OK response');
          // Handle success (e.g., refresh reservation list)
          this.getAdminReservations();
        } else {
          // Handle other errors
        }
      }
    );
  }

}
