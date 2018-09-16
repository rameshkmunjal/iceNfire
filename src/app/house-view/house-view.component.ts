import { Component, OnInit } from '@angular/core';
import {IcenfireHttpService} from "../icenfire-http.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Location } from '@angular/common';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css'], 
  providers:[Location]
})
//class defined
export class HouseViewComponent implements OnInit {
  //variables decalration
  public currentHouseView;
  public defaultValue:string = "Not Known";
  //dependency injection 
  constructor(private _route: ActivatedRoute, private router:Router, public icenfireHttpService:IcenfireHttpService, public location:Location) {
    console.log("house view component constructor called");
   }
   //oninit defined
  ngOnInit() {
    console.log('house view component ngOnInit called');
    let houseId = this._route.snapshot.paramMap.get("houseID");
    console.log(houseId);
    let urlParam = "/houses/"+houseId; 
    this.icenfireHttpService.getCardById(urlParam).subscribe(
      data=>{
        console.log("logging data");
        console.log(data);
        this.currentHouseView = data;
      },
      error =>{
        console.log("some error occurred");
        console.log(error.message);
      }
    ) //subscribe method closed 
  }//ngOnInit function closed
  public goBack(){
    console.log(this);
    this.location.back();
  }
}//characterViewComponent class definition cclosed
