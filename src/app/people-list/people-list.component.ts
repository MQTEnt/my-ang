import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-people-list',
  template: `
    <ul>
      <li *ngFor="let person of people">
        {{person.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [
    {name: 'Kobayashi Taihei', height: 177, weight: 65},
    {name: 'Vu Xuan Dung', height: 165, weight: 62},
    {name: 'Tran Ngoc Thang', height: 173, weight: 68},
  ];
  constructor() { }

  ngOnInit() {
  }

}
