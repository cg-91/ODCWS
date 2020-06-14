import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carsave',
  templateUrl: './carsave.component.html',
  styleUrls: ['./carsave.component.scss']
})
export class CarsaveComponent implements OnInit {

  carFrom: FormGroup;
  step1: any = {};
  submitted: boolean = false;

  constructor(private carService: CarService,
      private router: Router,
      private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.carFrom = this.formBuilder.group(
      {
        carname: ['', [Validators.required]],
        car_type: ['', [Validators.required]],
        colour: ['', [Validators.required]],
        reg_number: ['', [Validators.required]],
        imageUrl: ['', [Validators.required]],
      }
    )
  }

  get f1(){
    return this.carFrom.controls
  }

  onSubmit(){
    console.log(this.carFrom.value);
    this.submitted = true;
    if(this.carFrom.invalid){
      return ;
    }
    this.carService.createCar(this.carFrom.value).subscribe(
      response=> {
        console.log(response);
      },
    )
    this.gotoList();
  }

  gotoList(){
      this.router.navigate(['/carlist']);
  }

}
