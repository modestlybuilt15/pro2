import { style } from '@angular/animations';
import { asNativeElements, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro1',
  templateUrl: './pro1.component.html',
  styleUrls: ['./pro1.component.css']
})
export class Pro1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  name = 'Everyone';
  idName="sampleid";
  check=false;
  change="";


  onclick(){
    this.change="You are smart!!!!";

    


    
  }
  
  

  
}
