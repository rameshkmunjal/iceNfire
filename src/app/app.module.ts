import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";//importing FormsModule for ngModel etc.
//importing components using in thisapplication
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookViewComponent } from './book-view/book-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
//module for routing
import {RouterModule, Routes} from '@angular/router';
//http service module included
import { IcenfireHttpService } from './icenfire-http.service';

import { HttpClientModule } from '@angular/common/http';
//importing pipes created in this application
import { SelectPipe } from './select.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [ //including components and pipes created in this application
    AppComponent,
    HomeComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent,
    NotFoundComponent,
    BookViewComponent,
    CharacterViewComponent,
    HouseViewComponent,
    SelectPipe,
    HeaderComponent,    
    FooterComponent    
  ],
  imports: [ //including modules
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([ //including routes - path and components
      {path:'home', component:HomeComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'books', component:BooksComponent},
      {path:'characters', component:CharactersComponent},
      {path:'houses', component:HousesComponent},
      {path:'books/:bookID', component:BookViewComponent},
      {path:'characters/:characterID', component:CharacterViewComponent},
      {path:'houses/:houseID', component:HouseViewComponent},
      {path:'**', component:NotFoundComponent}      
    ])
  ],
  providers: [IcenfireHttpService], //including httpservice in array
  bootstrap: [AppComponent]
})
export class AppModule { }
