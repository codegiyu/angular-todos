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

const dummyData = {
  todo: [
    { title: "1", description: "First one here" },
    { title: "Second", description: "Second one here" },
  ],
  doing: [
    { title: "Doing", description: "Have fun" },
    { title: "Sense", description: "Still on the way" },
  ],
  done: [
    { title: "done", description: "Amazing job" },
    { title: "Nice", description: "As expected!" },
  ],
}

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private menuIsOpen = new BehaviorSubject<boolean>(false);
  private allTasks = new BehaviorSubject<AllTasks>(dummyData)
  
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