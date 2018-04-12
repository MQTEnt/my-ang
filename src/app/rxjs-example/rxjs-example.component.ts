import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs/observable/range';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-example',
  template: `
    <p>
      rxjs-example works!
    </p>
  `,
  styleUrls: ['./rxjs-example.component.scss']
})
export class RxjsExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    range(1, 10)
      .pipe(filter(x => x % 2 === 1), map(x => x + x))
      .subscribe(x => console.log(x));
  }

}
