import { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import SingleTask from "./SingleTask";

interface Task {
  name: string;
  createdAt: Date;
  completed: boolean;
};

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks).map((task: Task) => ({
        ...task,
        createdAt: new Date(task.createdAt),
      })));
    }
  }, []);

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

      <div className="flex flex-col px-5 py-2 bg-white rounded-md tasks-container">
        {filterTasks().map((task, index) => (
          <SingleTask
            key={index}
            task={task}
            toggleCompleted={() => toggleTaskCompleted(index)}
            deleteTask={() => deleteTask(index)}
          />
        ))}

        <div className="flex justify-between text-gray-500 actions">
          <p className="remaining-tasks">{updateCurrentTasks()} tasks left</p>
          <div className="flex gap-5 filters">
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
          <button onClick={() => deleteCompletedTasks()}>Clear Completed</button>
        </div>
      </div>
    </>
  )
}

export default Tasks;