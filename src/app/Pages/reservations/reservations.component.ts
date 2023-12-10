import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  gardienDetail: any;
  gardienList: any = [];
  gardien: any;

  constructor(private service: ServicesService, private router: Router, private activatRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let gardienId = '';
    if(this.activatRoute.snapshot.params['id']) {
      gardienId = this.activatRoute.snapshot.params['id'];
      if(gardienId !== ''){
        this.loadGardienDetails(gardienId);
      }
    }
  }

  loadGardienDetails(gardienId: any) {
    this.service.getGardienById(gardienId).subscribe(res => {
      this.gardienDetail = res;
      console.log(this.gardienDetail);
    })
  }

}
