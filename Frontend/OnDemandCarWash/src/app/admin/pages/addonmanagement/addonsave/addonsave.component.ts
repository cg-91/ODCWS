import { Component, OnInit } from '@angular/core';
import { AddonService } from '../addon.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addonsave',
  templateUrl: './addonsave.component.html',
  styleUrls: ['./addonsave.component.scss']
})
export class AddonsaveComponent implements OnInit {

  addon: any = {};
  addOnsFrom: FormGroup;
  step1: any = {};
  submitted: boolean = false;

  constructor(private addonService: AddonService, private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addOnsFrom = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        price: ['', [Validators.required]],
      }
    )
  }

  get f1() {
    return this.addOnsFrom.controls
  }

  onSubmit() {
    console.log(this.addOnsFrom.value);
    this.submitted = true;
    if (this.addOnsFrom.invalid) {
      return;
    }
    this.addonService.createAddOn(this.addOnsFrom.value).subscribe(
      response => {
        console.log(response);
      },
    )
    this.gotoList();
  }

  gotoList(){
    this.router.navigate(['/addonlist']);
  }
}