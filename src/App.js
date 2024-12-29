import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  const handleButtonClick = () => {
    alert('Кнопка нажата!');
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Choo Choo! This is an example of a create-react-app site running on Railway.</p>
        <Button text="Нажми меня" onClick={handleButtonClick} /> {/* Используем кнопку */}
        <a className="App-link" href="https://react.dev/learn" target="_blank" rel="noreferrer noopener">Learn React</a>
      </header>
    </div>
  );
}

export default App;
