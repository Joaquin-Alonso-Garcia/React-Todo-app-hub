import './App.css';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';

function App() {

  return (
    <>
      <header className='flex items-center justify-between mt-10 mb-12'>
        <h1 className='text-3xl font-bold text-white'>TODO</h1>
        <img src="/images/icon-moon.svg" alt="moon icon" className='w-[26px] h-[26px]' />
      </header>
      <main>
        <section>
          <CreateTask />
          <Tasks />
        </section>
      </main>
    </>
  )
}

export default App;
