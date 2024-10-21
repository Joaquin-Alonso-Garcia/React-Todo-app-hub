import { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import SingleTask from "./SingleTask";

interface Task {
  name: string;
  // createdAt: Date;
  completed: boolean;
};

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = sessionStorage.getItem('tasks');

    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  useEffect(() => {
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (index: number) => {
    const updateTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, completed: !task.completed } : task
    );

    setTasks(updateTasks);
  };

  const deleteTask = (index: number) => {
    const updateTasks = tasks.filter((_, taskIndex) => taskIndex !== index);

    setTasks(updateTasks);
  };

  const updateCurrentTasks = () => {
    return tasks.filter((task) => task.completed === false).length;
  };

  const deleteCompletedTasks = () => {
    const updateTasks = tasks.filter(task => task.completed === false);

    setTasks(updateTasks);
  }

  const filterTasks = () => {
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    } else if (filter == 'incomplete') {
      return tasks.filter(task => !task.completed);
    } else {
      return tasks;
    }
  }

  return (
    <>
      <CreateTask addTask={addTask} />

      <div className="flex flex-col mb-12 bg-white rounded-md tasks-container">
        <ul>
          {filterTasks().map((task, index) => (
            <li key={index}>
              <SingleTask
                key={index}
                task={task}
                toggleCompleted={() => toggleTaskCompleted(index)}
                deleteTask={() => deleteTask(index)}
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between px-5 text-gray-400 actions">
          <p className="remaining-tasks font-secondary">{updateCurrentTasks()} tasks left</p>
          <div className="flex gap-5 py-4 filters font-secondary">
            <button
              className={`font-bold hover:text-gray-600 ${filter === 'all' ? 'text-blue-600' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`font-bold hover:text-gray-600 ${filter === 'incomplete' ? 'text-blue-600' : ''}`}
              onClick={() => setFilter('incomplete')}
            >
              Active
            </button>
            <button
              className={`font-bold hover:text-gray-600 ${filter === 'completed' ? 'text-blue-600' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>
          <button onClick={() => deleteCompletedTasks()} className="hover:text-gray-600 font-secondary">
            Clear Completed
          </button>
        </div>
      </div>
    </>
  )
}

export default Tasks;