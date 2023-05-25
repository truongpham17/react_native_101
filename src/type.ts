export type TodoItem = {
  id: number | string;
  title: string;
  isCompleted: boolean;
};

export type TodoList = TodoItem[];
