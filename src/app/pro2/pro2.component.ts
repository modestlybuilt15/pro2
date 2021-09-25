import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-pro2',
  templateUrl: './pro2.component.html',
  styleUrls: ['./pro2.component.css']
})
export class Pro2Component implements OnInit {

  constructor(public dataId: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(userForm: any){
    console.log(userForm.value);
    this.dataId.getData(userForm.value).subscribe((response)=>{
      console.log(response)
    })

    }
  name1='Male';
  name2='Female';

}
