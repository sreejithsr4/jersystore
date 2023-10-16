import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm=this.fb.group({
    pid:['',[Validators.required,Validators.pattern('[0-9]+')]],
pname:['',[Validators.required,Validators.pattern('[a-zA-Z -]+')]],
    psize:['',[Validators.required,Validators.pattern('[SMLXL,]+')]],
    prating:['',[Validators.required,Validators.pattern('[0-9.]+')]],
    pdes:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ., -]+')]],
    price:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pimage:['',[Validators.required,Validators.pattern('[a-zA-Z0-9/,._:-]+')]],
    pcid:['',[Validators.required,Validators.pattern('[0-9]+')]],



  })
  constructor(private fb:FormBuilder,private ds:DataService,private route:Router,private rt:RouterModule){

  }
  ngOnInit(): void {
    
  }
  addProduct(){
    const path=this.addForm.value
    let productData={
      id:path.pid,
      productName:path.pname,
          size:path.psize,
          rating:path.prating,
          description:path.pdes,
          price:path.price,
          image:path.pimage,
          categoryId:path.pcid
    }

    if(this.addForm.valid){
      this.ds.addProduct(productData).subscribe({
        next:(result:any)=>{
          alert("new product added")
          this.route.navigateByUrl("")
  
        },
        error:(result:any)=>{
          alert(result)
        }
      })

    }
    else{
      alert("Please Fill the form")
    }


  }


}
