import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { PeopleService } from "../people.service";
import { Person } from "../person";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styles: []
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
  person: Person;
  sub: any;
  professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];

  constructor(private route: ActivatedRoute,
              private peopleService: PeopleService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoPeoplesList(){
    let link = ['/people'];
    this.router.navigate(link);
  }

  savePersonDetails(){
    this.peopleService.save(this.person);
    alert('Saved Person!');
  }
}
