import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../service/todolist.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private todo:TodolistService) { }

  public object:any;

  ngOnInit(): void {
    this.todo.getData().subscribe((data)=>{
      console.log(data);
      this.object=data;
    })
  }

    buttonFunction(input:any){
      console.log(input.value);
  
      this.todo.postData(input.value).subscribe();
  
      this.todo.getData().subscribe((data)=>{
        console.log(data);
        this.object=data;
      })

  }

}
