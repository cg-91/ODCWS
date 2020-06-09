import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/admin/service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent implements OnInit {

  constructor(private router : Router, private backendService : BackendService) { }
  cars = '';  

  ngOnInit() {
    this.backendService.getAllCar().subscribe(data => {
      this.cars = data.data;
      console.log(this.cars);
    });
  }

}
