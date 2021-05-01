import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goalsObservable = this.goals.asObservable();

  constructor() { }

  changeGoal(goals: any) {
    this.goals.next(goals);
  }
}
