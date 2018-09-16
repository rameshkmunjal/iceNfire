import { Component, OnInit } from '@angular/core';
import {IcenfireHttpService} from "../icenfire-http.service";
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

//
@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
  providers:[Location]
})
export class BookViewComponent implements OnInit {
  public currentBookView;
  constructor(private _route: ActivatedRoute, private router:Router, public icenfireHttpService:IcenfireHttpService, public location:Location) {
    console.log("book view component constructor called");
   }

  ngOnInit() {
    console.log('book view component ngOnInit called');
    let bookId = this._route.snapshot.paramMap.get("bookID");
    console.log(bookId);
    let urlParam ="/books/"+bookId;
    this.icenfireHttpService.getCardById(urlParam).subscribe(
      data=>{
        console.log("logging data");
        console.log(data);
        this.currentBookView = data;
      },
      error =>{
        console.log("some error occurred");
        console.log(error.message);
      }
    ) //subscribe method closed 
  }//ngOnInit function closed
  public goBack(){
    this.location.back();
  }
}//BookViewComponent class definition cclosed
