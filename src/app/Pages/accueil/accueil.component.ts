import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  gardienList: any = [];
  gardien: any;

  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.getGardiens();
  }
  getGardiens(){
    this.gardien = this.service.getGardiens().subscribe(res => {
      this.gardienList = res;
      console.log(this.gardienList);
    })
  }

  goTo(gardien: any){
    this.router.navigate(['/gardien',gardien.id]);
  }
    


}
