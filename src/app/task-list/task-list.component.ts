import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  myTask: Task =
  {
    id: 1,
    description: "do some dishes",
    completed: false
  };

  tasks: Task[];

  constructor() { }

  ngOnInit(): void {
  }

}
