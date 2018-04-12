import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeopleService } from "./people.service";


import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

import { appRouterModule } from "./app.routes";
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';



@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailsComponent,
    RxjsExampleComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    FormsModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
