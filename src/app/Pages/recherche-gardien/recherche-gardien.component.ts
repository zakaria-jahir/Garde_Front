import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-recherche-gardien',
  templateUrl: './recherche-gardien.component.html',
  styleUrls: ['./recherche-gardien.component.css']
})
export class RechercheGardienComponent implements OnInit {

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
