//importing component , service , location , router
import { Component, OnInit } from '@angular/core';
import {IcenfireHttpService} from "../icenfire-http.service";
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
//component metadata
@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css'],
  providers: [Location]
})
//defining class
export class CharacterViewComponent implements OnInit {
  public currentCharacterView;
  public defaultValue:string = "Not Known";//whereever property value is blank

  constructor(private _route: ActivatedRoute, private router:Router, public icenfireHttpService:IcenfireHttpService,  public location : Location) {
    console.log("character view component constructor called");
   }

  ngOnInit() {
    console.log('character view component ngOnInit called');
    let characterId = this._route.snapshot.paramMap.get("characterID");
    console.log(characterId);
    let urlParam = "/characters/"+characterId;
    this.icenfireHttpService.getCardById(urlParam).subscribe(//converting observable into data
      data=>{
        console.log("logging data");
        console.log(data);
        this.currentCharacterView = data;
      },
      error =>{
        console.log("some error occurred");
        console.log(error.message);
      }
    ) //subscribe method closed 
  }//ngOnInit function closed
  public goBack() {
    this.location.back(); //back to previous page
  }
}//characterViewComponent class definition cclosed
