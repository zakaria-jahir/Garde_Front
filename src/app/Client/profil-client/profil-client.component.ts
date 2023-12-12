import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.css']
})
export class ProfilClientComponent implements OnInit {

  profilForm!: FormGroup;
  clientDetails: any;
  clientId= this.activatRoute.snapshot.params['id'];

  constructor(private formBuilder: FormBuilder,private service: ServicesService,
    private router: Router, private activatRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createProfolForm();
    let clientId = '';
    if(this.activatRoute.snapshot.params['id']) {
      clientId = this.activatRoute.snapshot.params['id'];
      if(clientId !== ''){
        this.loadClientInfo(clientId);
        console.log(this.clientId);
      }
    }
  }

  createProfolForm() {
    this.profilForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      mail: '',
      teleNum: '',
      password: ''
    });
  }
  loadClientInfo(clientId: any) {
    this.service.getClientById(clientId).subscribe(res => {
      this.profilForm.controls['nom'].setValue(res.nom);
      this.profilForm.controls['prenom'].setValue(res.prenom);
      this.profilForm.controls['mail'].setValue(res.mail);
      this.profilForm.controls['teleNum'].setValue(res.teleNum);
      this.profilForm.controls['password'].setValue(res.password);
     
    });
  }
  createProfil(values: any){
    let formData = new FormData();
    formData.append('nom', values.nom);
    formData.append('prenom', values.prenom);
    formData.append('mail', values.mail);
    formData.append('teleNum', values.teleNum);
    formData.append('password', values.password);
    formData.append('id', this.clientId);  
    console.log(this.clientId);
    this.service.updateClientProfil(formData).subscribe(res => {
      if (res.result === 'success') {
        this.router.navigate(["/Listcar"]);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Profil a été modifier !',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
    }
    

}
