import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonService } from '../service/common.service';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  public user: any = {
    username: (localStorage.getItem('userid')) ? atob(localStorage.getItem('userid')) : '',
    password: (localStorage.getItem('password')) ? atob(localStorage.getItem('password')) : ''
  };

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private common: CommonService,
    private alertService: AlertService) { }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.signIn(this.loginForm.value).subscribe(
      response => {
        if (response.status === 200) {
          this.alertService.success('You have logged in successfully');
          localStorage.setItem('user', response.username);
          localStorage.setItem('token', response.token);
          this.common.checkLogin(true);
          if (response.username === 'admin@gmail.com') {
            this.router.navigate(['/admin']);
          } else {
            if (this.route.snapshot.paramMap.get('data')) {
              //            this.router.navigate()
              console.log('checkOut');
            } else {
              this.router.navigate(['/carwash']);
            }
          }
        }
        else{
          console.log(response.message);
          this.alertService.error('Please enter valid credentials');   
        }
      }
    )
  }
}
