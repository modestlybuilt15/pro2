import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  reactive = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birth: new FormControl(''),
    Male: new FormControl(''),
    Female: new FormControl(''),
    mail: new FormControl(''),
    num:  new FormControl(''),
    pass: new FormControl(''),
    confrm: new FormControl(''),
    lang:  new FormControl('')
  });

  onSubmit(userForm: any){
    console.log(userForm.value);
    }

  constructor() { }

  ngOnInit(): void {

  }

}
