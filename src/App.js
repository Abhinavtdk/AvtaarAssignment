import logo_avtaar from './logo_avtaar.jpg';
import './App.css';
import Create from './Create';

function App() {
  return (
    <div className="App">
      <div className="heading-container">
        <img src={logo_avtaar}/>
        <h3>Avtaar Assignment</h3>
      </div>
      <div className="content-container">
        <div className="content">
          <Create />
        </div>
      </div>
    </div>
  );
}

export default App;
