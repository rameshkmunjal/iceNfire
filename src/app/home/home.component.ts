//importing  component , service 
import { Component, OnInit, OnDestroy } from '@angular/core';
import {IcenfireHttpService} from "../icenfire-http.service";

//Component metadata
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//defining HomeComponent class
export class HomeComponent implements OnInit {   
  public allItems:any=[]; //array that will hold all items i.e. books , charcters, houses
  public allBooks:any;
  public allCharacters:any;
  public allHouses:any;
  public defaultValue:string = "Not Known";//whereever no information - default value will be shown 

  constructor(public IcenfireHttpService:IcenfireHttpService) {
    console.log("Home Component constructor called");
   }

  ngOnInit() {  //using a common service function to get observable data    
      let a = this.IcenfireHttpService.getAllCards("books");
      let b = this.IcenfireHttpService.getAllCards("characters");
      let c = this.IcenfireHttpService.getAllCards("houses");      
      console.log(a);
      console.log(b);
      console.log(c);
      //handling and converting observable into data
      this.allBooks= a.subscribe(      
        data=>{
          this.allBooks=data;
          console.log(this.allBooks);
          this.allBooks=this.IcenfireHttpService.getSortData(this.allBooks);//sorting
          for(let book of this.allBooks){ //adding filterType property into data
            book.filterType = "books";
          }
          console.log(this.allBooks); 
          this.allItems = this.allItems.concat(this.allBooks);//adding into allItems
          console.log(this.allItems);        
        },
        error =>{
          console.log("some error occured"+ error);
          this.IcenfireHttpService.handleError(error);          
        }               
    )
    console.log(this.allItems);

    //handling and converting observable into data
    this.allCharacters= b.subscribe(      
      data=>{
        this.allCharacters=data;
        console.log(this.allCharacters);
        this.allCharacters=this.IcenfireHttpService.getSortData(this.allCharacters);//sorting
        for(let character of this.allCharacters){ //adding filterType property into data
          character.filterType = "characters";
        }
        console.log(this.allCharacters);
        this.allItems = this.allItems.concat(this.allCharacters);//adding into allItems 
        console.log(this.allItems);        
      },
      error =>{
        console.log("some error occured");
        this.IcenfireHttpService.handleError(error);
      }        
  )
    console.log(this.allItems); 

    //handling and converting observable into data
    this.allHouses= c.subscribe(      
      data=>{
        this.allHouses=data;
        console.log(this.allHouses);
        this.allHouses=this.IcenfireHttpService.getSortData(this.allHouses);//sorting
        for(let house of this.allHouses){ //adding filterType property into data
          house.filterType = "houses";
        }
        console.log(this.allHouses);
        this.allItems = this.allItems.concat(this.allHouses); //adding into allItems
        console.log(this.allItems);        
      },
      error =>{
        console.log("some error occured");
        this.IcenfireHttpService.handleError(error);
      }        
  )     
  }//ngOnInit ended
}