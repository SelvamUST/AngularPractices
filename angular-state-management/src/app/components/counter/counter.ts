import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common'; // ✅ import AsyncPipe
import { increment, decrement } from '../../store/counter/actions/counter.actions'; 
import { selectCounterValue } from '../../store/counter/selectors/counter.selectors'; 
 
@Component({
  selector: 'app-counter',
  imports: [AsyncPipe], // ✅ register AsyncPipe for use in template
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
  standalone: true
})

export class Counter {
  // Observable stream of counter value from the store
  counter$ : Observable<number>;

  constructor(private store: Store) {
    this.counter$ = this.store.select(selectCounterValue);
  }

  // Dispatch increment action
  increment() {
    this.store.dispatch(increment());
  }

  // Dispatch decrement action 
  decrement() { 
    this.store.dispatch(decrement()); 
  }
}
