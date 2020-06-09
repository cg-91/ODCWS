import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/admin/service/backend.service';

@Component({
  selector: 'app-washerlist',
  templateUrl: './washerlist.component.html',
  styleUrls: ['./washerlist.component.scss']
})
export class WasherlistComponent implements OnInit {

  washers : '';

  constructor(private router : Router, private backendService : BackendService) { }

  ngOnInit() {
    this.backendService.getAllWasher().subscribe(data => {
        this.washers = data.data;

      });
  }

}
