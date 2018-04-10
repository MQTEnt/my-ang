import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class PeopleService {

  constructor() { }

  getAll() : Person[] {
    return [
      {name: 'Kobayashi Taihei', height: 177, weight: 65},
      {name: 'Vu Xuan Dungaaaaaa', height: 165, weight: 62},
      {name: 'Tran Ngoc Thang', height: 173, weight: 68},
    ];
  }
}
