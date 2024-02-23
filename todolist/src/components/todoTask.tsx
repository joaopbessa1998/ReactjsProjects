import { ITask } from "../App";

interface IProps {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: IProps) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task?.taskName}</span>
        <span>{task?.deadline}</span>
      </div>
      <button
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
