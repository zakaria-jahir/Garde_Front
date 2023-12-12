import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

  reservation: any = {};

  constructor( private service: ServicesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const reservationId = this.route.snapshot.params['id'];
    this.service.getReservationById(reservationId).subscribe(
      (data) => {
        this.reservation = data;
      },
      (error) => {
        console.error('Error fetching reservation for update:', error);
      }
    );
  }

  updateReservation() {
    // Implement the update logic here
    // Use the service to send the updated reservation to the backend
    this.service.updateReservation(this.reservation).subscribe(
      (data) => {
        console.log('Reservation updated successfully:', data);
        // Redirect or perform other actions as needed
        this.router.navigate(['/client-reservations']);
      },
      (error) => {
        console.error('Error updating reservation:', error);
        // Handle errors appropriately
      }
    );
  }

}
