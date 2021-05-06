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
  ngOnInit(): void {
    this.refreshCompList();
  }

  refreshCompList(){
    this.service.getCompList().subscribe(data=>{
      this.CompanyList = data;
    });
  }
}
