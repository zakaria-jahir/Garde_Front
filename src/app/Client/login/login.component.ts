import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientForm!: FormGroup;
  errorMessage: any|false;

  constructor(private formBuilder: FormBuilder,private service: ServicesService,
    private router: Router) { }

  ngOnInit(): void {
    this.createUserForm();
  }
  createUserForm() {
    this.clientForm = this.formBuilder.group({
      mail: '',
      password: ''
    });
  }

  login(values: any){
    const requestData = {
      mail: values.mail,
      password: values.password
    };
  
    this.service.loginClient(requestData).subscribe(
      (response) => {
        console.log('Received response from server:', response);
  
        // Check if response.id is defined
        if (response.id !== undefined) {
          this.service.setLoggedIn(true);
          this.service.setIdClient(response.id);

          //this.service.setLocalStorageLoginStatus(true);
  
          // Log the ID immediately after setting it
          console.log('Client ID (set in login):', this.service.getIdClient().getValue());
  
          this.router.navigate(['/accueil']);
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
