import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-comp',
  templateUrl: './show-comp.component.html',
  styleUrls: ['./show-comp.component.css']
})
export class ShowCompComponent implements OnInit {

  constructor(private service:SharedService) { }

  CompanyList:any = [];
  ModalTitle:string="";
  ActivateAddEditCompany:boolean=false;
  comp:any= [];
  ngOnInit(): void {
    this.refreshCompList();
  }
  addClick(){
    this.comp={
      symbol:"",
      price: 0,
      date: ""
    }
    this.ModalTitle = "Add Company";
    this.ActivateAddEditCompany = true;
  }

  closeClick(){
    this.ActivateAddEditCompany = false;
    this.refreshCompList();  
  }

  editClick(item:any){
    this.comp = item;
    this.ModalTitle = "Edit Company";
    this.ActivateAddEditCompany=true;
  }
  
  refreshCompList(){
    this.service.getCompList().subscribe(data=>{
      this.CompanyList = data;
    });
  }
}
