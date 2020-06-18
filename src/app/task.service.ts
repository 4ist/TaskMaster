import { Injectable } from '@angular/core';

import { TASKS } from './hero-list-stub';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = TASKS;

  getTasks(): Task[] {
    return this.tasks;
  }
}
