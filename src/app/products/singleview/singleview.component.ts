import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit{
  id:any
  pdata:any={}
  constructor(private ds:DataService,private ar:ActivatedRoute,private route:Router ){}
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.id=data.id
      
      
    })
    this.ds.getProduct(this.id).subscribe({
      next:(result:any)=>{
        this.pdata=result
       
        

      }
    })

    
  }
  delete(){
    this.ds.removeProduct(this.id).subscribe({
      next:(result:any)=>{
        alert("product deleted")
        this.route.navigateByUrl("")
      }
    })
  }

}
