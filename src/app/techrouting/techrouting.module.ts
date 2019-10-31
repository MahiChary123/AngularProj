import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from '../web/web.component';
import { JavaComponent } from '../java/java.component';
import { RouterModule,Routes} from '@angular/router'
import { PythonComponent } from '../python/python.component';
import { AngularComponent } from '../angular/angular.component';


const routes:Routes=[
  {path:'web',component:WebComponent},
  {path:'java',component:JavaComponent},
  {path:'python',component:PythonComponent},
  {path:'angular',component:AngularComponent},
  {path:'',component:WebComponent,pathMatch:'full'},
  {path:'**',component:JavaComponent,pathMatch:'full'},
  {path:'',component:PythonComponent,pathMatch:'full'},
  {path:'**',component:AngularComponent,pathMatch:'full'}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class TechroutingModule { }
export const TechComponents=[WebComponent,JavaComponent,PythonComponent,
AngularComponent]