import React, { useRef } from 'react';

// import './style.scss;'
import './test.scss';

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.click();
  }

  return (
    <div></div>
  );
}

export default App;

{/* <div className='Main'>
  <nav>
    <div className='main-page'>Главная</div>
    <div className='about'>О сервисе</div>
    <button className='sign-in'>Войти</button>
  </nav>
  <h1>Записывайте лекции с ИИ: <br />
  быстро, точно, удобно!</h1>
  <input type='file' accept='.mp3,.wav' ref={inputRef}/>
  <button className='import-audio' onClick={handleButtonClick}>Откройте файл</button>
  <div className='conspect-config'>
    <h2>Форматы конспектов</h2>
    <div className='configs'>
      <div className='config'>
        <div className='header'>Краткий</div>
        <div className="desc">Ключевые тезисы</div>
      </div>
      <div className='config'>
        <div className='header'>Полный</div>
        <div className="desc">Дословный конспект</div>
      </div>
      <div className='config'>
        <div className='header'>Расширенный</div>
        <div className="desc">С пояснениями и структурой</div>
      </div>
    </div>
  </div>
</div> */}