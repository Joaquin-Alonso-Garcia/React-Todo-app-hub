import { useState } from "react";

interface Task {
  name: string;
  // createdAt: Date;
  completed: boolean;
};

type CreateTaskProps = {
  addTask: (newTask: Task) => void;
};

const CreateTask: React.FC<CreateTaskProps> = ({ addTask }) => {
  const [taskName, setTaskName] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      const newTask: Task = {
        name: taskName,
        // createdAt: new Date(),
        completed: false,
      };

      addTask(newTask);
      setTaskName('');
    }
  };

  return (
    <div className="flex items-center gap-2 px-5 py-2 mb-6 rounded-md bg-primary-0 dark:bg-secondary-0 create-task-container">
      <button
        onClick={handleAddTask}
        className="inline-flex items-center justify-center p-2 border-[0.5px] border-gray-300 rounded-full hover:bg-blue-500 add-task-btn group w-6 h-[22px]"
      >
        <img src="/assets/images/icon-check.svg" alt="add task icon" className="hidden group-hover:inline-block" />
      </button>

      <label htmlFor="newTask" className="text-gray-500"></label>
      <input
        type="text"
        value={taskName}
        name="newTask"
        className="w-full p-2 text-primary-0 font-secondary dark:bg-secondary-0 dark:text-gray-300"
        onChange={handleInputChange}
        id="newTask"
        placeholder="Create new todo..."
      />
    </div>
  )
};

export default CreateTask;
