import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from "../people.service";

@Component({
  selector: 'app-people-list',
  template: `
    <ul>
      <li *ngFor="let person of people">
        <a [routerLink]="['/person', person.id]">
          {{person.name}}
        </a>
      </li>
    </ul>
    <p><a [routerLink]="['/rxjs-example']">Rxjs Example</a></p>
  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  selectedPerson: Person;
  people: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this.peopleService.getAll();
  }

  selectPerson(person: Person){
    this.selectedPerson = person;
  }
}
