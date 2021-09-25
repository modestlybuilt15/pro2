import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http:HttpClient) { 
   }

  getData(data:"any"){
    return this.http.post("https://6149f8b007549f001755a72e.mockapi.io/services",data)
  }

  
}
