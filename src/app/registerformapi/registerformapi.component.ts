import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-mahi',
  templateUrl: './registerformapi.component.html',
  styleUrls: ['./registerformapi.component.css']
})
export class RegisterformapiComponent implements OnInit {
  userForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
  }

  ngOnInit() {
this.userForm=this.formBuilder.group({
      name:['Mahendra Chary',[Validators.required,Validators.minLength(6)]],
      contact:[],
      email:[],
      address:this.formBuilder.group({
        street:[],
        city:[],
        postalcode:['123456',[Validators.pattern('[0-9]{6}')]]
      })
        })
  }
  onSubmit(){
    console.log(this.userForm.value)
  }

}
