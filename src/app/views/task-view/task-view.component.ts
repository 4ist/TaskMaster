import {
    Component,
    Input,
} from '@angular/core';

import {
    Status,
    Task,
} from '../../models/task';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css'],
})
export class TaskViewComponent {
  public expanded = false;

  @Input() task: Task;

  unicodeStatuses = {
    [Status.Incomplete]: '\u2610',
    [Status.Complete]: '\u2611',
  };

  getUnicodeStatus(task: Task): string {
    return this.unicodeStatuses[task.status];
  }

  onToggleStatus() {
    if (this.task.status === Status.Incomplete) {
      this.task.status = Status.Complete;
    } else if (this.task.status === Status.Complete) {
      this.task.status = Status.Incomplete;
    }
  }

  onToggleDetails() {
    this.expanded = !this.expanded;
  }
}
