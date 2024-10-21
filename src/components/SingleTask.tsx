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
    <div className="flex justify-between py-2 border-b border-gray-300 border-solid task">
      <div className="flex">
        <label htmlFor="completed"></label>
        <input type="checkbox" name="completed" checked={task.completed} onChange={toggleCompleted} className="mr-5" />
        <span className={task.completed ? 'line-through' : ''}>{task.name}</span>
      </div>
      <span>(Created: {task.createdAt.toLocaleDateString()})</span>
      <button onClick={deleteTask}>Delete</button>
    </div>
  )
}

export default SingleTask;