import { useState } from "react";
// import CreateTask from "./CreateTask";
import SingleTask from "./SingleTask";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  // const addTask = (task: string) => {
  //   setTasks([...tasks, task]);
  // }

  return (
    <>
      <div className="flex flex-col px-5 py-2 bg-white rounded-md tasks-container">
        {tasks.map((task, index) => (
          <SingleTask key={index} task={task} />
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