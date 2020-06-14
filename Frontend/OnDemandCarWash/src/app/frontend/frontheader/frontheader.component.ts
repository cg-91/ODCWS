import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service';

@Component({
  selector: 'app-frontheader',
  templateUrl: './frontheader.component.html',
  styleUrls: ['./frontheader.component.scss']
})
export class FrontheaderComponent implements OnInit {

  constructor(private router: Router, private service: CommonService) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    if (this.service.isUserLoggedIn() == false) {
      return false;
    } else {
      return true;
    }
  }

}
