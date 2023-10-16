import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from 'src/app/products/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchData:any=""
  constructor(private router:RouterModule,private ds:DataService){}
  accessData(event:any){
    this.searchData=event.target.value
    console.log(this.searchData);
    this.ds.search.next(this.searchData)
    

  }

}
