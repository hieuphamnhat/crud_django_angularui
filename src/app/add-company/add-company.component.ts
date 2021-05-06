import { Component, OnInit } from '@angular/core';
import {Company} from '../company';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
