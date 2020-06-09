import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/admin/service/backend.service';

@Component({
  selector: 'app-addonlist',
  templateUrl: './addonlist.component.html',
  styleUrls: ['./addonlist.component.scss']
})
export class AddonlistComponent implements OnInit {

  constructor(private router : Router, private backendService : BackendService) { }

  addons = '';

  ngOnInit() {
    this.backendService.getAllAddOn().subscribe(data => {
      this.addons = data.data;
      console.log(this.addons);
    });
  }

}
