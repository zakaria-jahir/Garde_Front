import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  ReservationForm!: FormGroup;
  errorMessage: any|false;
  gardienDetail: any;
  // gardienList: any = [];
  // gardien: any;
  // clientId: string = '';
  // gardienId: any;

  constructor(private service: ServicesService, private router: Router, private activatRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log('Component initialized');
    let gardienId = '';
    if(this.activatRoute.snapshot.params['id']) {
      gardienId = this.activatRoute.snapshot.params['id'];
      if(gardienId !== ''){
        this.loadGardienDetails(gardienId);
      }
    }
    this.createReservationForm();
  }


  createReservationForm() {
    const clientId = localStorage.getItem('clientId');
    this.ReservationForm = this.formBuilder.group({
      nomFacture: [''],
      prenomFacture: [''],
      mailFacture: [''],
      adresseFacture: [''],
      nomAnimal: [''],
      typeAnimal: [''],
      dateDebut: [''],
      dateFin: [''],
      total: [0],
      clientId: clientId ? +clientId : 0,
      gardienId: '',
    });
  }

  calculateTotal(): void {
    console.log('Calculating total...');
    const startDate = new Date(this.ReservationForm.value.dateDebut);
    const endDate = new Date(this.ReservationForm.value.dateFin);
    const durationInDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

    // Assuming gardienDetail contains the gardien information including the daily price
    const dailyPrice = this.gardienDetail.prixJour;

    // Calculate the total
    const total = durationInDays * dailyPrice;

    // Set the calculated total in the form control
    this.ReservationForm.patchValue({
      total: total.toFixed(2) // Assuming you want to keep the total with two decimal places
    });
  }

  reserver(values: any){
    console.log('Submitting reservation...', this.ReservationForm.value);
    // const requestData = {
    //   nomFacture: values.nomFacture,
    //   prenomFacture: values.prenomFacture,
    //   mailFacture: values.mailFacture,
    //   adresseFacture: values.adresseFacture,
    //   nomAnimal: values.nomAnimal,
    //   typeAnimal: values.typeAnimal,
    //   dateDebut: values.dateDebut,
    //   dateFin: values.dateFin,
    //   total: values.total,
    //   clientId: values.clientId,
    //   gardienId: values.gardienId,
    // };
  
   
    const requestData = this.ReservationForm.value;

    // Fetch client and gardien details
    this.service.getClientById(requestData.clientId).subscribe(
      (client) => {
        this.service.getGardienById(requestData.gardienId).subscribe(
          (gardien) => {
            // Set client and gardien in the request data
            requestData.client = client;
            requestData.gardien = gardien;

            // Submit the reservation
            this.service.reserver(requestData).subscribe(
              (response) => {
                console.log('Received response from server:', response);
                this.router.navigate(['/Facture',response.id]);
              },
              (error) => {
                console.error('Error:', error);
                this.errorMessage = error;
              }
            );
          },
          (gardienError) => {
            console.error('Error fetching gardien:', gardienError);
          }
        );
      },
      (clientError) => {
        console.error('Error fetching client:', clientError);
      }
    );
  }

  loadGardienDetails(gardienId: any) {
    this.service.getGardienById(gardienId).subscribe(res => {
      this.gardienDetail = res;
      console.log(this.gardienDetail);
      this.ReservationForm.patchValue({
        gardienId: this.gardienDetail.id
      });
    })
  }

}
