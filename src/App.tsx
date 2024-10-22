import { useEffect, useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';

function App() {

  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (darkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <header className={`flex items-center justify-between mt-10 mb-12`}>
        <h1 className='text-5xl font-bold text-white font-primary'>TODO</h1>
        <button onClick={toogleDarkMode}>
          {
            darkMode ? (
              <img src="/assets/images/icon-sun.svg" alt="sun icon" className='w-[26px] h-[26px]' />
            ) : (
              <img src="/assets/images/icon-moon.svg" alt="moon icon" className='w-[26px] h-[26px]' />
            )
          }
        </button>
      </header>
      <main>
        <section>
          <Tasks />
          <p className='text-grayishBlue font-primary dark:text-gray-600'>Drag and drop to reaorder list</p>
        </section>
      </main>
    </>
  )
}

export default App;
