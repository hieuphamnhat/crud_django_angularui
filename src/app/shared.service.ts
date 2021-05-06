import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIurl = 'http://127.0.0.1:8000/api';
  constructor(private http:HttpClient) { }

  getCompList():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/companies/');
  }

  addComp(val:any){
    return this.http.post(this.APIurl + '/companies/', val);
  }

  updateComp(val:any){
    return this.http.put(this.APIurl + '/companies/', val);
  }
  
  deleteComp(val:any){
    return this.http.delete(this.APIurl + '/companies/', val);
  }
}
