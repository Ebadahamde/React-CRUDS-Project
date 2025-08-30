import logo from './logo.svg';
import './App.css';
import BasicCard from './Componends/TodosList';

function App() {
  return (
    <div className="App" style={{backgroundImage:URL("./")}}>
     <BasicCard/>
    </div>
  );
}

export default App;
