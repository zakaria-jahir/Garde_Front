import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-gardiens',
  templateUrl: './gardiens.component.html',
  styleUrls: ['./gardiens.component.css']
})
export class GardiensComponent implements OnInit {

  gardienList: any = [];
  gardien: any;

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.getGardiens();
  }

  getGardiens(){
    this.gardien = this.service.getGardiens().subscribe(res => {
      this.gardienList = res;
      console.log(this.gardienList);
    })
  }

}
