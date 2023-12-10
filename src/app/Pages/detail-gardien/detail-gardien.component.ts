import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-detail-gardien',
  templateUrl: './detail-gardien.component.html',
  styleUrls: ['./detail-gardien.component.css']
})
export class DetailGardienComponent implements OnInit {

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
  reservePlace() {
    // Check if gardienDetail has the required information
    if (this.gardienDetail && this.gardienDetail.id) {
      // Navigate to the checkout page and pass the gardien ID as a parameter
      this.router.navigate(['/resersation', this.gardienDetail.id]);
    }
  }
  
}
