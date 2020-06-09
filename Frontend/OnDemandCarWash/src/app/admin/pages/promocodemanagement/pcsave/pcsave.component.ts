import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PromocodeService } from '../promocode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pcsave',
  templateUrl: './pcsave.component.html',
  styleUrls: ['./pcsave.component.scss']
})
export class PcsaveComponent implements OnInit {

  promocode: any = {};
  pcFrom: FormGroup;
  step1: any = {};
  submitted: boolean = false; 

  constructor(private pcService: PromocodeService, private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pcFrom = this.formBuilder.group(
      {
        promocode: ['', [Validators.required]],
        percentage: ['', [Validators.required]],
      }
    )
  }

  get f1(){
    return this.pcFrom.controls
  }

  onSubmit(){
    console.log(this.pcFrom.value);
    this.submitted = true;
    if(this.pcFrom.invalid){
      return ;
    }
    this.pcService.createPromoCode(this.pcFrom.value).subscribe(
      response=> {
        console.log(response);
      },
    )
  }

}
