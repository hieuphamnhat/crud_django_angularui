import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ListCompanyComponent } from './list-company/list-company.component';
import { ShowCompComponent } from './company/show-comp/show-comp.component';
import { AddEditCompComponent } from './company/add-edit-comp/add-edit-comp.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompanyComponent} from './company/company.component';
@NgModule({
  declarations: [
    AppComponent,
    AddCompanyComponent,
    ListCompanyComponent,
    ShowCompComponent,
    AddEditCompComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
