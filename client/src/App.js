import './App.css';
import Counter from './Counter';
import BugLogTable from './BugLogTable';
import SuspenseParent from './SuspenseParent';
import NavBar from './Navbar';
import Introduction from './Introduction';
import Owners from './Owners';
import Keys from './Keys';

function App() {

  const demonstrateFunc = () => {
    alert('React Developer Tools!');
  };

  const handleCount = () => {
    alert('Welcome!');
  };

  const bugLogs = [
    {
      id: 1,
      name: 'React useState Bug',
      date: '2023-10-02',
      project: 'Debugger Demo',
      description: 'A syntactical error. Imported useState instead of { useState }',
      severity: 'High',
      priority: 'High',
      status: 'Closed'
    },
    {
      id: 2,
      name: 'React useContext bug',
      date: '2023-13-02',
      project: 'Debugger Demo',
      description: 'Context has to be a separate component/file. Need more research ',
      severity: 'Low',
      priority: 'High',
      status: 'Closed'
    },
    {
      id: 3,
      name: 'React useMemo bug',
      date: '2023-14-02',
      project: 'Debugger Demo',
      description: 'Lorem ipsum dolor',
      severity: 'Medium',
      priority: 'Medium',
      status: 'Open'
    }
  ];

  return (
    <div className='App'>
      <NavBar />
      <div className='App-header'>
        <header>
          <h1>
            Bug Log
          </h1>
          <h2>
            A simple bug log app to demonstrate debugging in React
          </h2>
        </header>

        {/* Part 1:  Passing Props*/}

        <Introduction introMessage={"Good afternoon"} names={{ name1: "Vibodh", name2: "Nikhil" }} propFunction={demonstrateFunc} />

        {/* Part 2:  Handling Owners v/s Parents and State*/}

        <Owners />

        {/* Part 3: Handling Keys*/}

        <Keys bugLogs={bugLogs} />

        {/* Part 4: Handling Suspense*/}
        <SuspenseParent />

        {/* Part 5: Profiler*/}
        <h3>Part 5: Profiler</h3>
        <Counter
          countVar={0}
          countObject={
            {
              title: 'bug',
              startCount: 0
            }
          }
          countFunction={handleCount}
        />


      </div>
    </div>
  );
}

export default App;
