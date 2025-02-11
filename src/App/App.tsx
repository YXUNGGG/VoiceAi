import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getCatsFetch } from '../Store/catSlice';
import { RootState } from '../Store/store';

// import './style.scss;'
import './test.scss';
import Cat from './components/Cat';

const App = () => {
  // const inputRef = useRef<HTMLInputElement>(null);

  // const handleButtonClick = () => {
  //   if (!inputRef.current) {
  //     return;
  //   }

  //   inputRef.current.click();
  // }
  const cats = useSelector((state: RootState) => state.cats.cats);
  const dispatch = useDispatch();

  const [isShowMore, setIsShowMore] = useState(false);

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  console.log(cats);
  
  return (
    <div className='App'>
      <h1>CAT SPECIES GALLERY</h1>
      <p>Images of different species pf cats. Lots of cats for your viewing pleasure.</p>
      <hr />

      <div className='Gallery'>
        {!isShowMore 
        ? cats.slice(0, 5).map(cat => <Cat cat={cat} />)
        : cats.map(cat => <Cat cat={cat} />)}
      </div>

      <button onClick={() => setIsShowMore(prev => !prev)}>{!isShowMore ? "VIEW MORE CATS" : "VIEW LESS CATS"}</button>
    </div>
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