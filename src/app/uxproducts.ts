import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Uxproducts {
  url = "https://counter-application-8264a-default-rtdb.firebaseio.com/products.json"
  private headers = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient){}
 
   saveProduct(count:any){
    // return this.http.post(this.url,count);
    return this.http.put(this.url,count,{headers: this.headers});
      
    }
    fetchProducts(){
      return this.http.get(this.url)
    }
  
}
