import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-gardien-login',
  templateUrl: './gardien-login.component.html',
  styleUrls: ['./gardien-login.component.css']
})
export class GardienLoginComponent implements OnInit {

  gardienForm!: FormGroup;
  errorMessage: any|false;


  constructor(private formBuilder: FormBuilder,private service: ServicesService,
    private router: Router) { }

  ngOnInit(): void {
    this.createUserForm();
  }
  createUserForm() {
    this.gardienForm = this.formBuilder.group({
      mail: '',
      password: ''
    });
  }
  login(values: any){
    const requestData = {
      mail: values.mail,
      password: values.password
    };
  
    this.service.login(requestData).subscribe(
      (response) => {
        console.log('Received response from server:', response);
  
        // Check if response.id is defined
        if (response.id !== undefined) {
          this.service.setLoggedIn(true);
          this.service.setIdGardien(response.id);
  
          // Log the ID immediately after setting it
          console.log('Gardien ID (set in login):', this.service.getIdGardien().getValue());
  
          this.router.navigate(['/gardien/dashboard']);
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
