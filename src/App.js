import './App.css';
import Counter from './Counter';
import Welcome from './Welcome';
import Profile from './Profile';
import DisplayPicture from './DisplayPicture';
import BugLogTable from './BugLogTable';
import FrameworkContext from './FrameworkContext';
import Parent from './Parent';


function App() {

  const handleCount = () => {
    alert('Count Function has been triggered');
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
    }
  ];

  return (
    <div className='App'>
      

        <header>
          <h1>
            Bug Log
          </h1>
        </header>

        <BugLogTable bugLogs={bugLogs} />

        <Welcome num={4} />

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
      <FrameworkContext.Provider value="React">
        <Profile>
          <DisplayPicture />
        </Profile>
      </FrameworkContext.Provider>

      <Parent />
    </div>
  );
}

export default App;
