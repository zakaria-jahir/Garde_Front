import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  clientList: any = [];
  clients: any;

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.clients = this.service.getClients().subscribe(res => {
      this.clientList = res;
      console.log(this.clientList);
    })
  }

}
