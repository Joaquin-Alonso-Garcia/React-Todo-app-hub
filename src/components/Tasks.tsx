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

      <div className="flex flex-col mb-6 bg-white rounded-md md:mb-14 text-veryDarkGrayishBlue-100 dark:bg-darkDesaturatedBlue dark:text-gray-300 tasks-container">
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

        <div className="flex items-center justify-between px-5 py-4 text-grayishBlue dark:text-gray-600 actions">
          <p className="remaining-tasks font-primary">{updateCurrentTasks()} tasks left</p>
          <div className="hidden gap-5 md:flex filters font-primary">
            <button
              className={`font-bold hover:text-veryDarkGrayishBlue-100 dark:hover:text-white ${filter === 'all' ? 'text-brightBlue dark:hover:border-veryLightGrayishBlue' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`font-bold hover:text-veryDarkGrayishBlue-100 dark:hover:text-white ${filter === 'incomplete' ? 'text-brightBlue dark:hover:border-veryLightGrayishBlue' : ''}`}
              onClick={() => setFilter('incomplete')}
            >
              Active
            </button>
            <button
              className={`font-bold hover:text-veryDarkGrayishBlue-100 dark:hover:text-white ${filter === 'completed' ? 'text-brightBlue dark:hover:border-veryLightGrayishBlue' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>
          <button onClick={() => deleteCompletedTasks()} className="hover:text-veryDarkGrayishBlue-100 dark:hover:text-white font-primary">
            Clear Completed
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-5 py-4 mb-8 bg-white rounded-md mobile-filters md:hidden font-primary dark:bg-darkDesaturatedBlue text-grayishBlue dark:text-gray-600">
          <button
            className={`font-bold hover:text-veryDarkGrayishBlue-100 dark:hover:text-white ${filter === 'all' ? 'text-brightBlue dark:hover:border-veryLightGrayishBlue' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`font-bold hover:text-veryDarkGrayishBlue-100 dark:hover:text-white ${filter === 'incomplete' ? 'text-brightBlue dark:hover:border-veryLightGrayishBlue' : ''}`}
            onClick={() => setFilter('incomplete')}
          >
            Active
          </button>
          <button
            className={`font-bold hover:text-veryDarkGrayishBlue-100 dark:hover:text-white ${filter === 'completed' ? 'text-brightBlue dark:hover:border-veryLightGrayishBlue' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
    </>
  )
}

export default Tasks;