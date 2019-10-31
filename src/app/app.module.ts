import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TechComponents, TechroutingModule } from './techrouting/techrouting.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterformapiComponent } from './registerformapi/registerformapi.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PythonComponent } from './python/python.component';
import { AngularComponent } from './angular/angular.component';
import { BasicprojComponent } from './basicproj/basicproj.component';

@NgModule({
  declarations: [
    AppComponent,
    TechComponents,
    RegisterformapiComponent,
    PythonComponent,
    AngularComponent,
    BasicprojComponent
  ],
  imports: [
    BrowserModule,RouterModule,TechroutingModule,HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
