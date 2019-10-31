import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
public weblist=[];
public errorMsg;
  constructor(private myservice:WebService) { }

  ngOnInit() {
    this.myservice.getwebdetails()
    .subscribe(result=>this.weblist=result,
      error=>this.errorMsg=error)
  }

}
