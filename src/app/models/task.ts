export interface Task {
  id: number;
  title: string;
  description: string;
  status: Status;
}

export enum Status {
  Incomplete,
  Complete,
  InProgress,
}
