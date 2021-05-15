import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-comp',
  templateUrl: './add-edit-comp.component.html',
  styleUrls: ['./add-edit-comp.component.css']
})
export class AddEditCompComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() comp:any;
  symbol:any;
  price:any;
  date:any;

  ngOnInit(): void {
    this.symbol = this.comp.symbol;
    this.price = this.comp.price;
    this.date = this.comp.date;
  }
  addCompany(){
    var val = {symbol: this.symbol, 
              price: this.price,
              date: this.date}
    this.service.addComp(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  editCompany(){
    var val = {
      symbol: this.symbol, 
      price: this.price,
      date: this.date}
    this.service.updateComp(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}
