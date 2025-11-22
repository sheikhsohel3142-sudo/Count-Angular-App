import { Component, OnInit, signal } from '@angular/core';
import { Uxproducts } from './uxproducts';




@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  // protected readonly title = signal('first-app-ngmodule');
  constructor(private _uxProducts:Uxproducts){}
  count = 0;
  handleCounter(val:string){
    if(val=='minus'){
      if(this.count == 0){
        this.count = 0

      }else{
        this.count -= 1;

      }
      
    }else if(val =='Plus'){
      this.count += 1;
    }else{
      this.count =0;
    }
     
  this._uxProducts.saveProduct(this.count).subscribe({
  next: (response) => console.log(response),
  error: (err) => console.log(err)

});

this.fetchProducts();
   
  
  }
   ngOnInit(): void {
    this.fetchProducts();
  }
    fetchProducts(){
      this._uxProducts.fetchProducts().subscribe({
   next: (response) =>{ 
    console.log(response)
    const data = JSON.stringify(response);
    console.log(data);
    this.count = JSON.parse(data)
    },
   error: (err) => console.log(err)

})

    } 

 
  }


