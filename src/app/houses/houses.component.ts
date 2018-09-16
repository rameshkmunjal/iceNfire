import { Component, OnInit } from '@angular/core';
import {IcenfireHttpService} from "../icenfire-http.service";

@Component({ //Component metadata 
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})

//HousesComponent class defined 
export class HousesComponent implements OnInit {  
    public allHouses;
    public defaultValue:string ="Not Known"; //to handle no value properties

  //dependency injection - http-service
    constructor(public IcenfireHttpService:IcenfireHttpService) {
    console.log("Character Component constructor called");
   }

  //onInit defined
  ngOnInit() {
    console.log("House Component OnInit Called");
    let arg="houses";
    this.allHouses = this.IcenfireHttpService.getAllCards(arg).subscribe(
      data=>{
        console.log("logging data");
        this.allHouses = data;
        console.log(this.allHouses);
        this.allHouses=this.IcenfireHttpService.getSortData(this.allHouses);
        console.log(this.allHouses);
      }, 
      error=>{
        this.IcenfireHttpService.handleError(error);
        }
    )
    console.log(this.allHouses);  
  }

  ngOnDestroy(){
    console.log("House Component Destroyed");
  }

}
