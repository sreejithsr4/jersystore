import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router,  } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
pid:any=""
pdata:any={}

  constructor( private ds: DataService,  private rt: Router, private ar: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.ar.params.subscribe(data=>{
this.pid=data["id"]
console.log(this.pid);


    })
    this.ds.getProduct(this.pid).subscribe({next:(result:any)=>{
      this.pdata=result
      
      
    }})

  }
  update() {
    this.ds.updateproduct(this.pid,this.pdata).subscribe({
      next:(result:any)=>{
        alert("Product data updated")
        this.rt.navigateByUrl(`products/view-product/${this.pid}`)
      }
    })
   }

}
