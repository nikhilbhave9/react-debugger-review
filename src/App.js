import './App.css';
import Counter from './Counter';
import Welcome from './Welcome';
import Profile from './Profile';
import DisplayPicture from './DisplayPicture';
import FrameworkContext from './FrameworkContext';


function App() {

  const handleCount = () => {
    alert('Count Function has been triggered');
  };

  return (
    <div className='App'>
      

        <header>
          <h1>
            Bug Log
          </h1>
        </header>

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
