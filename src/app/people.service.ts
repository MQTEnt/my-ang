import { Injectable } from '@angular/core';
import { Person } from './person';

const PEOPLE : Person[] = [
  {id: 1, name: 'Kobayashi Taihei', height: 177, weight: 65},
  {id: 2, name: 'Taihei', height: 165, weight: 62},
  {id: 3, name: 'Kobayashi', height: 173, weight: 68},
];

@Injectable()
export class PeopleService {

  getAll() : Person[] {
    return PEOPLE;
  }

  get(id: number) : Person {
    return PEOPLE.find(p => p.id === id);
  }

  save(person: Person){
    let originalPerson = PEOPLE.find(p => p.id === person.id);
    if (originalPerson) Object.assign(originalPerson, person);
  }

  private clone(object: any){
    // Tránh chia sẻ cùng một object giữa các component khác nhau
    return JSON.parse(JSON.stringify(object));
  }
}
