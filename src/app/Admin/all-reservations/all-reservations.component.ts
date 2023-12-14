import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.css']
})
export class AllReservationsComponent implements OnInit {
  reservationList: any = [];
  reservation: any;

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(){
    this.reservation = this.service.getReservations().subscribe(res => {
      this.reservationList = res;
      console.log(this.reservationList);
    })
  }
  deleteReservation(reservationId: number): void {
    this.service.deleteReservation(reservationId).subscribe(
      (response) => {
        // Handle success (e.g., refresh reservation list)
        this.getReservations();
      },
      (error) => {
        console.error('Error deleting reservation:', error);
  
        // Check if the error is due to a parsing issue
        if (error instanceof HttpErrorResponse && error.status === 200) {
          // Ignore the parsing error if the status is 200
          console.warn('Parsing error ignored for 200 OK response');
          // Handle success (e.g., refresh reservation list)
          this.getReservations();
        } else {
          // Handle other errors
        }
      }
    );
  }

}
