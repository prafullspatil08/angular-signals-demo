import { Component } from '@angular/core';

@Component({
  selector: 'app-normal-property',
  templateUrl: './normal-property.component.html',
  styleUrls: ['./normal-property.component.scss']
})
export class NormalPropertyComponent {
  firstName:string = 'Prafull';
  lastName:string = 'Patil'
  fullName: string = this.firstName + ' ' + this.lastName

  changeFirstName(fname:string){
    this.firstName = fname
  }

  changeLastName(lname:string){
    this.lastName = lname
  }
}
