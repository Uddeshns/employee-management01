import { Component } from '@angular/core';
import {FormGroup ,FormBuilder,FormControl} from '@angular/forms';
import { Employee } from 'src/app/model/employee';
@Component({
  selector: 'app-deskboard',
  templateUrl: './deskboard.component.html',
  styleUrls: ['./deskboard.component.css']
})
export class DeskboardComponent {

  empDetail !: FormGroup;
  empObj : Employee = new Employee();

  constructor(private FormBuilder: FormBuilder){
  }
  ngOnInit():void{
    this.empDetail = this.FormBuilder.group({
      inputName:(''),
      inputEmail:(''),
      inputSalary:('')
    });
  }
  addEmployee(){
    console.log(this.empDetail);
    this.empObj.inputId = this.empDetail.value.inputId
    this.empObj.inputName = this.empDetail.value.inputName
    this.empObj.inputEmail = this.empDetail.value.inputEmail
    this.empObj.inputSalary = this.empDetail.value.inputSalary
  }    
}
