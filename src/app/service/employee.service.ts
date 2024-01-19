import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  addEmpURL : string;
  constructor( private Http: HttpClient) { 
    this.addEmpURL
  }
}
