import { Component, OnInit } from '@angular/core';
import { of as observableOf, fromEvent, Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-basics',
  templateUrl: './rxjs-basics.component.html'
})
export class RxjsBasicsComponent implements OnInit {
  ngOnInit(): void {
    observableOf(2)
      .pipe(map(x => x * 23))
      .subscribe(x => console.log(x));

    fromEvent(document, 'click')
      .pipe(
        debounceTime(500),
        map(x => x.timeStamp),
        map(x => `click event at ${x}`)
      )
      .subscribe(x => console.log(x));

      let stream$ = Observable.create(observer => observer.next(5));
      stream$ = stream$.pipe(map(x => x as number + 8));
      stream$.subscribe(data => console.log(data));
  }
}
