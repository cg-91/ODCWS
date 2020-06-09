import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/admin/service/backend.service';

@Component({
  selector: 'app-pclist',
  templateUrl: './pclist.component.html',
  styleUrls: ['./pclist.component.scss']
})
export class PclistComponent implements OnInit {

  constructor(private router: Router, private backendService : BackendService) { }

  promocodes = '';

  ngOnInit() {
    this.backendService.getAllPromoCode().subscribe(data=> {
      this.promocodes = data.data;
    });
  }

}
