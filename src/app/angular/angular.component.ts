import { Component, OnInit } from '@angular/core';
import { AngularService } from '../angular.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
public angular=[];
public errMsg;
  constructor(private _myservice:AngularService) { }

  ngOnInit() {
    this._myservice.getAngular()
    .subscribe(result=>this.angular=result,
      error=>this.errMsg=error)
  }

}
