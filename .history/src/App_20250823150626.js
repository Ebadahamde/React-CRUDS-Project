import logo from './logo.svg';
import './App.css';
import BasicCard from './Componends/TodosList';

function App() {
  return (
    <div className="App"   style={{ 
    backgroundImage: "url('/Background.jpg')", 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    minHeight: "100vh" 
  }}>
     <BasicCard/>
    </div>
  );
}

export default App;
