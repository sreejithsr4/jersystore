import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  search= new BehaviorSubject("")

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get('http://localhost:3000/products')
  }
  getProduct(id:any){
    return this.http.get('http://localhost:3000/products/'+id)
  }
  removeProduct(id:any){
    return this.http.delete('http://localhost:3000/products/'+id)
  }
  addProduct(bodyData:any){
   return this.http.post('http://localhost:3000/products',bodyData)
  }
  updateproduct(id:any,bodydata:any){
    return this.http.put('http://localhost:3000/products/'+id,bodydata)
  }
}
