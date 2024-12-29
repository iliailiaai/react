import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  const [result, setResult] = useState(null); // Состояние для результата
  const [loading, setLoading] = useState(false); // Состояние для загрузки
  const [error, setError] = useState(null); // Состояние для ошибок
  
const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      // Отправляем POST-запрос на API
      const response = await fetch('https://flask-production-2450.up.railway.app/api/multiply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: 5 }), // Отправляем число 5
      });

      const data = await response.json(); // Получаем JSON-ответ
      if (response.ok) {
        setResult(data.result); // Устанавливаем результат в состояние
      } else {
        setError(data.error || 'Unknown error occurred'); // Устанавливаем ошибку
      }
    } catch (err) {
      setError('Failed to connect to the server'); // Ловим сетевые ошибки
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Choo Choo! This is an example of a create-react-app site running on Railway.</p>
    
        <Button text="Отправить 5" onClick={handleClick} /> {/* Используем кнопку */}

        {loading && <p>Загрузка...</p>}
        {result !== null && <p>Результат: {result}</p>}
        {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
          
        <a className="App-link" href="https://react.dev/learn" target="_blank" rel="noreferrer noopener">Learn React</a>
      </header>
    </div>
  );
}

export default App;
