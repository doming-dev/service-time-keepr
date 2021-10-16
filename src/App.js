import './App.css';
import TimeKeeper from './components/time-keeper';
import PageHeader from './components/page-header';
import AppProvider from './context/AppProvider';


function App() {
  return (
    <AppProvider>
      <div className="App">
        <PageHeader />
        <TimeKeeper />
      </div>
    </AppProvider>

  );
}

export default App;
