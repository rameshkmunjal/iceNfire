import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable({
  providedIn: 'root'
})
export class IcenfireHttpService {   
  public baseUrl = 'https://anapioficeandfire.com/api';   

  constructor(private _http:HttpClient) {
    console.log("iceNfire http service called");
  }
  public handleError(err:HttpErrorResponse){
    console.log("Handler error Http calls");
    console.log('err.message');
    return Observable.throw(err.message);
  }
//A common function to get all cards of all books or  houses or characters
  public getAllCards(endPoint):any{       
      let myResponse = this._http.get(this.baseUrl+"/"+endPoint).catch(this.handleError);      
      console.log(myResponse);
      return myResponse;     
  }
  //A common function to get a single card of a book or house or character 
  public getCardById(extendedUrl):any{
    let myResponse = this._http.get(this.baseUrl+extendedUrl);
    return myResponse;
  }
  //A common function to sort data - books , houses , characters
  public getSortData(rawData):any{
    rawData.sort(function (name1, name2) {
      if (name1.name < name2.name) {
      return -1;
      } else if (name1.name > name2.name) {
      return 1;
      } else {
      return 0;
      }
      });
      return rawData;
  }
}
