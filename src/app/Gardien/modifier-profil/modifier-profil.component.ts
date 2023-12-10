import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.css']
})
export class ModifierProfilComponent implements OnInit {

  profilForm!: FormGroup;
  gardienDetails: any;
  gardienId= this.activatRoute.snapshot.params['id'];

  constructor(private formBuilder: FormBuilder,private service: ServicesService,
    private router: Router, private activatRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createProfolForm();

    let gardienId = '';
    if(this.activatRoute.snapshot.params['id']) {
      gardienId = this.activatRoute.snapshot.params['id'];
      if(gardienId !== ''){
        this.loadGardienInfo(gardienId);
        console.log(this.gardienId);
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
  loadGardienInfo(gardienId: any) {
    this.service.getGardienById(gardienId).subscribe(res => {
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
    formData.append('numTel', values.teleNum);
    formData.append('password', values.password);
    formData.append('id', this.gardienId);  
    console.log(this.gardienId);
    }

}
