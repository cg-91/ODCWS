import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/admin/service/backend.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {

  customers : '';

  constructor(private router : Router, private backendService : BackendService  ) { }

  ngOnInit() {
  //  console.log(this.loadAllCustomer());
  this.backendService.getAllCustomer().subscribe(data => {
  //  console.log(data.data);
    this.customers = data.data;

  });
  }

}
