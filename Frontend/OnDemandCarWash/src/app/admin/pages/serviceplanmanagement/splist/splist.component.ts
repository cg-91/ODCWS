import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/admin/service/backend.service';

@Component({
  selector: 'app-splist',
  templateUrl: './splist.component.html',
  styleUrls: ['./splist.component.scss']
})
export class SplistComponent implements OnInit {

  constructor(private router: Router, private backendService : BackendService) { }

  sp = '';

  ngOnInit() {
    this.backendService.getAllServicePlan().subscribe(data=> {
        this.sp = data.data;
    });
  }

}
