import { Component, OnInit } from '@angular/core';
import { AlertType, AlertSettings, AlertsService } from '@jaspero/ng-alerts';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(  private _alert: AlertsService ) { }

  ngOnInit() {
  }

  openAlert(type: AlertType, title: string, message: string, options: AlertSettings) {
    this._alert.create(type, title, message, options);
  }

}
