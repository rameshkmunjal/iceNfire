//importing component and service
import { Component, OnInit } from '@angular/core';
import {IcenfireHttpService} from "../icenfire-http.service";

//component metadata
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']  
})

//class definition
export class CharactersComponent implements OnInit {
  public allCharacters;
  public defaultValue:string = "Not Known";

  constructor(public IcenfireHttpService:IcenfireHttpService) {
    console.log("Character Component constructor called");
   }


  ngOnInit() {
    console.log("Character Component OnInit Called");
    let arg="characters";
    this.allCharacters = this.IcenfireHttpService.getAllCards(arg).subscribe(//converting observable into data
      data=>{
        console.log("logging data");
        this.allCharacters = data;
        console.log(this.allCharacters);
        this.allCharacters=this.IcenfireHttpService.getSortData(this.allCharacters);//sorting 
        console.log(this.allCharacters);
      }, 
      error=>{
        console.log("some error occurred");
        this.IcenfireHttpService.handleError(error);
      }
    )
    console.log(this.allCharacters);
  }
  ngOnDestroy(){
    console.log("Character Component Destroyed");
  }
  
}
