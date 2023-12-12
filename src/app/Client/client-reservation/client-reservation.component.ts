import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-client-reservation',
  templateUrl: './client-reservation.component.html',
  styleUrls: ['./client-reservation.component.css']
})
export class ClientReservationComponent implements OnInit {

  reservations: any[] = [];
  clientId:  number | undefined ;

  constructor(private service: ServicesService,private router: Router) { }

  ngOnInit(): void {
    this.clientId = this.service.getIdClient().value;
    console.log(this.clientId);
    if (this.clientId !== undefined) {
      this.getClientReservations();
    } else {
      console.error('Client ID is undefined. Unable to fetch reservations.');
    }
  }

  getClientReservations() {
    this.service.getClientReservations(this.clientId!).subscribe(
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
      (response) => {
        // Handle success (e.g., refresh reservation list)
        this.getClientReservations();
      },
      (error) => {
        console.error('Error deleting reservation:', error);
  
        // Check if the error is due to a parsing issue
        if (error instanceof HttpErrorResponse && error.status === 200) {
          // Ignore the parsing error if the status is 200
          console.warn('Parsing error ignored for 200 OK response');
          // Handle success (e.g., refresh reservation list)
          this.getClientReservations();
        } else {
          // Handle other errors
        }
      }
    );
  }
  

}
