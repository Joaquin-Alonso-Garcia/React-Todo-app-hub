import './App.css';
import Tasks from './components/Tasks';

function App() {

  return (
    <>
      <header className='flex items-center justify-between mt-10 mb-12'>
        <h1 className='text-5xl font-bold text-white font-primary'>TODO</h1>
        <img src="/assets/images/icon-moon.svg" alt="moon icon" className='w-[26px] h-[26px]' />
      </header>
      <main>
        <section>
          <Tasks />
          <p className='text-gray-400 font-secondary'>Drag and drop to reaorder list</p>
        </section>
      </main>
    </>
  )
}

export default App;
