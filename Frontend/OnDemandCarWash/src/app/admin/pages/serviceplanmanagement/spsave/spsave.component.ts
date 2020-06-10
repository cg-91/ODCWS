import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceplanService } from '../serviceplan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spsave',
  templateUrl: './spsave.component.html',
  styleUrls: ['./spsave.component.scss']
})
export class SpsaveComponent implements OnInit {

  serviceplan: any = {};
  spFrom: FormGroup;
  step1: any = {};
  submitted: boolean = false;

  constructor(private spService: ServiceplanService, private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.spFrom = this.formBuilder.group(
      {
        spname: ['', [Validators.required]],
        price: ['', [Validators.required]],
      }
    )
  }

  get f1() {
    return this.spFrom.controls
  }

  onSubmit() {
    console.log(this.spFrom.value);
    this.submitted = true;
    if (this.spFrom.invalid) {
      return;
    }
    this.spService.createSP(this.spFrom.value).subscribe(
      response => {
        console.log(response);
      },
    )
    this.gotoList();
  }

  gotoList(){
    this.router.navigate(['/splist']);
}

}
