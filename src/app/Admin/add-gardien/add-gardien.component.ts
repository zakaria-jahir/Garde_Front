import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-add-gardien',
  templateUrl: './add-gardien.component.html',
  styleUrls: ['./add-gardien.component.css']
})
export class AddGardienComponent implements OnInit {

  clientForm!: FormGroup;
  errorMessage: any|false;

  constructor(private formBuilder: FormBuilder,private service: ServicesService,
    private router: Router) { }

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm() {
    this.clientForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      mail: '',
      teleNum: '',
      typeGardien: '',
      typeAnimaux: '',
      prixJour: '',
      password: ''
    });
  }

  register(values: any){
    const requestData = {
      nom: values.nom,
      prenom: values.prenom,
      mail: values.mail,
      teleNum: values.teleNum,
      typeGardien: values.typeGardien,
      typeAnimaux: values.typeAnimaux,
      prixJour: values.prixJour,
      password: values.password
    };
  
    this.service.addGardien(requestData).subscribe(
      (response) => {
        console.log('Received response from server:', response);
  
        // Check if response.id is defined
        if (response.id !== undefined) {
          this.router.navigate(['/admin/dashboard']);
        } else {
          console.error('Error: Server response does not contain an ID.');
        }
      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = error;
      }
    );
  }

}
