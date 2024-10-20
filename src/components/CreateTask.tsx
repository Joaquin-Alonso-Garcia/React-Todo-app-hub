import { useState } from "react";

interface Task {
  name: string;
  createdAt: Date;
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
        createdAt: new Date(),
        completed: false,
      };

      addTask(newTask);
      setTaskName('');
    }
  };

  return (
    <div className="flex gap-2 px-5 py-2 mb-6 bg-white rounded-md create-task-container">
      <button onClick={handleAddTask}>Add Task</button>

      <label htmlFor="newTask" className="text-gray-500"></label>
      <input
        type="text"
        value={taskName}
        name="newTask"
        className="w-full p-2 text-black"
        onChange={handleInputChange}
        id="newTask"
        placeholder="Create new todo..."
      />
    </div>
  )
};

export default CreateTask;
