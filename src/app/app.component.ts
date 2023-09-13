import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = signal(0);
  actions = signal<string[]>([])

  increment(){
    // this.counter.update((oldValue:any)=> oldValue + 1);
    this.counter.set(this.counter() + 1);
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
  }

  decrement(){
    // this.counter.update((oldValue:any)=> oldValue - 1);
    this.counter.set(this.counter() - 1);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }
}
