//importing component and service
import { Component, OnInit } from '@angular/core';
import {IcenfireHttpService} from "../icenfire-http.service";

//component metadata
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
//class definition
export class BooksComponent implements OnInit {
  public allBooks;

  constructor(public IcenfireHttpService:IcenfireHttpService) {
    console.log("Books Component constructor called");
   }

  ngOnInit() {
    console.log("Books Component OnInit Called");
    let arg="books";
    this.allBooks = this.IcenfireHttpService.getAllCards(arg).subscribe(//converting observable into data
      data=>{
        console.log("logging data");
        this.allBooks = data;
        console.log(this.allBooks);
        this.allBooks=this.IcenfireHttpService.getSortData(this.allBooks);//sorting 
        console.log(this.allBooks);          
      }, 
      error=>{
        console.log("some error occurred");
        this.IcenfireHttpService.handleError(error);
      }      
    )
    console.log(this.allBooks);
  }
  ngOnDestroy(){
    console.log("Books Component Destroyed");
  }
}
