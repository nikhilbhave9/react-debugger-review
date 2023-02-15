import './App.css';
import Counter from './Counter';
import Welcome from './Welcome';
import Profile from './Profile';
import DisplayPicture from './DisplayPicture';
import BugLogTable from './BugLogTable';
import FrameworkContext from './FrameworkContext';


function App() {

  const handleCount = () => {
    alert('Count Function has been triggered');
  };

  const bugLogs = [
    {
      id: 1,
      name: 'React useState Bug',
      date: '2021-01-01',
      project: 'React',
      description: 'App crashes on open',
      severity: 'High',
      priority: 'High',
      status: 'Open'
    },
    {
      id: 2,
      name: 'React useState Bug',
      date: '2021-01-01',
      project: 'React',
      description: 'App crashes on open',
      severity: 'High',
      priority: 'High',
      status: 'Open'
    },
    {
      id: 3,
      name: 'React useState Bug',
      date: '2021-01-01',
      project: 'React',
      description: 'App crashes on open',
      severity: 'High',
      priority: 'High',
      status: 'Open'
    },
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
    </div>
  );
}

export default App;
