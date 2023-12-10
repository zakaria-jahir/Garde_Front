import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-gardien-dashboard',
  templateUrl: './gardien-dashboard.component.html',
  styleUrls: ['./gardien-dashboard.component.css']
})
export class GardienDashboardComponent implements OnInit {
  gardienId: number | undefined ;

  constructor(private service: ServicesService,private router: Router) { }

  ngOnInit(): void {
    // Subscribe to the BehaviorSubject to get updates
  this.service.getIdGardien().subscribe((id) => {
    this.gardienId = id;
    console.log('Gardien ID (get in ngOnInit):', this.gardienId);

    // Now you can use this.gardienId to fetch gardien details
  });
  }

  goToProfile(){
    this.router.navigate(['/gardienProfil',this.gardienId]);
  }

}
