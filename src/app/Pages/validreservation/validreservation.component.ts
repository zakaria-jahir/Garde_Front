import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-validreservation',
  templateUrl: './validreservation.component.html',
  styleUrls: ['./validreservation.component.css']
})
export class ValidreservationComponent implements OnInit {

  reservationDetails: any;
  reservationId= this.activatRoute.snapshot.params['id'];

  constructor(private service: ServicesService,
    private router: Router, private activatRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let reservationId = '';
    if(this.activatRoute.snapshot.params['id']) {
      reservationId = this.activatRoute.snapshot.params['id'];
      if(reservationId !== ''){
        this.loadReservationInfo(reservationId);
        console.log(this.reservationId);
      }
    }
  }

  loadReservationInfo(reservationId: any) {
    this.service.getReservationById(reservationId).subscribe(res => {
      this.reservationDetails = res;
      console.log(this.reservationDetails);
    })
  }

}
