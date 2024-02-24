type TaskItem = {
  id: string;
  title: string;
  details: string;
  type: TaskType;
  status: TaskStatus;
};

const TaskType = {
  Do: 'Do',
  Decide: 'Decide',
  Delegate: 'Delegate',
  Delete: 'Delete',
} as const;

type TaskType = (typeof TaskType)[keyof typeof TaskType];

const TaskStatus = {
  Pending: 'Pending',
  Completed: 'Completed',
} as const;

type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
