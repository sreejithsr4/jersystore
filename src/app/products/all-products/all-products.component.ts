import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  searchString:any=''
  categoryProducts:any=[]

  allProducts:any=[]
  constructor(private ds:DataService,private router:RouterModule){}
  ngOnInit(): void {
    this.ds.getAllProducts().subscribe({
      next:(result:any)=>{
       
        this.allProducts=result
        this.categoryProducts=this.allProducts
        
      }
    })
    this.ds.search.subscribe((data:any)=>{
      this.searchString=data
    })
    
  }
  

  categoryProduct(catId:any){
    this.categoryProducts=this.allProducts.filter((item:any)=>
      item["categoryId"]==catId || catId==""
    )
    console.log(this.categoryProducts);
    

  }

 
}
