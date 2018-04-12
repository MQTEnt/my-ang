import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';

const routes: Routes = [
  {
    path: 'person/:id',
    component: PersonDetailsComponent
  },
  {
    path: 'people',
    component: PeopleListComponent,
  },
  {
    path: 'rxjs-example',
    component: RxjsExampleComponent,
  },
  /*Set default route*/
  {
    path: '',
    redirectTo: '/people',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
