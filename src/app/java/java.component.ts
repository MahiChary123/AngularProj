import { Component, OnInit } from '@angular/core';
import { JavaService } from '../java.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  public javalist=[];
  public errMsg;
  constructor(private myservice:JavaService) { }

  ngOnInit() {
    this.myservice.getjavadetails()
    .subscribe(result=>this.javalist=result,
      error=>this.errMsg=error)
    
  }

}
