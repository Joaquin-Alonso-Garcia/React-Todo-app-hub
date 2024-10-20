import { useState } from "react";
import CreateTask from "./CreateTask";
import SingleTask from "./SingleTask";

interface Task {
  name: string;
  createdAt: Date;
  completed: boolean;
};

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (index: number) => {
    const updatedTasks = tasks.map((task, taskId) =>
      taskId === index ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  }

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, taskId) => taskId !== index);

    setTasks(updatedTasks);
  };

  return (
    <>
      <CreateTask addTask={addTask} />

      <div className="flex flex-col px-5 py-2 bg-white rounded-md tasks-container">
        {tasks.map((task, index) => (
          <SingleTask
            key={index}
            task={task}
            toggleCompleted={() => toggleTaskCompleted(index)}
            deleteTask={() => deleteTask(index)}
          />
        ))}

        <div className="flex justify-between text-gray-500 actions">
          <p className="remaining-tasks"># tasks left</p>
          <div className="flex gap-5 filters">
            <button className="font-bold">All</button>
            <button className="font-bold">Active</button>
            <button className="font-bold">Completed</button>
          </div>
          <button>Clear Completed</button>
        </div>
      </div>
    </>
  )
}

export default Tasks;