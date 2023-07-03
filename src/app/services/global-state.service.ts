import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SingleTask {
  title: string;
  description: string;
  group?: string;
}

export interface AllTasks {
  todo: SingleTask[];
  doing: SingleTask[];
  done: SingleTask[];
}

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private menuIsOpen = new BehaviorSubject<boolean>(false);
  private allTasks = new BehaviorSubject<AllTasks>({ todo: [], doing: [], done: [] })
  
  constructor() { }

  setMenuIsOpen(value: boolean) {
    this.menuIsOpen.next(value)
  }

  getMenuIsOpen() {
    return this.menuIsOpen.asObservable();
  }

  getAllTasks() {
    return this.allTasks.asObservable();
  }

  setAllTasks(obj: AllTasks) {
    this.allTasks.next(obj)
  }
}