import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: any = {};
  step1From: FormGroup;
  step1: any = {};
  submitted: boolean = false; 

  constructor(private router: Router,
     private formBuilder: FormBuilder,
     private auth: AuthService,
    //  private alert: AlertComponent
     ) {  }

  ngOnInit() {
    this.step1From = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email, Validators.maxLength(70),
                      Validators.pattern('^[^\\s]+@[^\\s]+\\.[^@\\s]+$')]],
        password: ['', [Validators.required,
                         Validators.minLength(6),
                         Validators.pattern('[a-zA-Z0-9!@_-]+')]],
        username: ['', [Validators.required]],
        role: ['', [Validators.required]],
      }
    )
  }

  AlertSettings: {
    overlay: true;
    overlayClickToClose: true;
    showCloseButton: true;
    duration: 5000;
 }



  get f1(){
    return this.step1From.controls
  }

  onSubmit(){
    console.log(this.step1From.value);
    this.submitted = true;
    if(this.step1From.invalid){
      return ;
    }
    this.auth.signUp(this.step1From.value).subscribe(
      response=> {
        console.log(response);
        
        if(response.status === 200){
 //         this.alert.openAlert('success', 'User Registration', response.message, this.AlertSettings);
        }else{
   //       this.alert.openAlert('error', 'User Registration', "Please try again", this.AlertSettings);
        }
      },
    )
  }
}