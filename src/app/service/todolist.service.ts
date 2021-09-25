import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http:HttpClient) { 
  }

  
   
  getData(){
    return this.http.get("https://6149f8b007549f001755a72e.mockapi.io/todolist");
  }

  postData(data:any){
    return this.http.post("https://6149f8b007549f001755a72e.mockapi.io/todolist",{"names":data});
  }
}
