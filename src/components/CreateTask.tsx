import { useState } from "react";

type CreateTaskProps = {
  addTask: (task: string) => void;
};

const CreateTask: React.FC<CreateTaskProps> = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  }

  return (
    <>
      <div className="flex gap-2 px-5 py-2 mb-6 bg-white rounded-md create-task-container">
        <button onClick={handleAddTask}>Add Task</button>

        <label htmlFor="newTask" className="text-gray-500"></label>
        <input
          type="text"
          value={task}
          name="newTask"
          className="w-full p-2 text-black"
          onChange={handleInputChange}
          id="newTask"
          placeholder="Create new todo..."
        />
      </div>
    </>
  )
}

export default CreateTask;
