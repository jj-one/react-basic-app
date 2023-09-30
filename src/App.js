import './App.css';
import Clock from './Clock';
// import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      {/* <Welcome name="JJ One One" /> */}
      <Clock date={new Date()} />
    </div>
  );
}

export default App;
