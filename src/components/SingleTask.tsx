interface Task {
  name: string;
  createdAt: Date;
  completed: boolean;
}

interface SingleTaskProps {
  task: Task;
  toggleCompleted: () => void;
  deleteTask: () => void;
};

const SingleTask: React.FC<SingleTaskProps> = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <div className={`flex gap-5 py-2 border-b border-gray-300 border-solid task ${task.completed ?? 'line-through'}`}>
      <label htmlFor="completed"></label>
      <input type="checkbox" name="completed" checked={task.completed} onChange={toggleCompleted} />
      <span>{task.name}</span>
      <span>(Created: {task.createdAt.toLocaleDateString()})</span>
      <button onClick={deleteTask}>Delete</button>
    </div>
  )
}

export default SingleTask;