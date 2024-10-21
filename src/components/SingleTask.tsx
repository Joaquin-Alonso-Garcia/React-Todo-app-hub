interface Task {
  name: string;
  // createdAt: Date;
  completed: boolean;
}

interface SingleTaskProps {
  task: Task;
  toggleCompleted: () => void;
  deleteTask: () => void;
};

const SingleTask: React.FC<SingleTaskProps> = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <div className="flex justify-between px-5 py-4 border-b border-gray-300 border-solid task">
      <div className="flex">
        <input
          type="checkbox"
          id={`task-checkbox-${task.name}`}
          checked={task.completed}
          onChange={toggleCompleted}
          className="hidden peer"
        />
        <label
          htmlFor={`task-checkbox-${task.name}`}
          className="flex items-center justify-center w-6 h-6 mr-5 border-[0.5px] border-gray-300 rounded-full cursor-pointer peer-checked:bg-blue-500 hover:border-blue-400 peer-checked:border-blue-500"
        >
          <img src="/assets/images/icon-check.svg" alt="check" className="w-2 h-2" />
        </label>
        <span className={`font-secondary ${task.completed ? 'line-through' : ''}`}>{task.name}</span>
      </div>
      {/* <span>(Created: {task.createdAt.toLocaleDateString()})</span> */}
      <button onClick={deleteTask}><img src="/assets/images/icon-cross.svg" alt="cross icon" /></button>
    </div>
  )
}

export default SingleTask;