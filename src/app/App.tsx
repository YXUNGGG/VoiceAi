import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getFetch } from '../Store/catSlice';
import { RootState } from '../Store/store';

import './styles/index.scss';
import MainPage from './components/MainPage';

const App = () => {
  // это тест редакса
  const data = useSelector((state: RootState) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetch());
  }, [dispatch]);
  console.log(data);
  
  return (
    <MainPage />
    // <div>
    //   {/* <h1>CAT SPECIES GALLERY</h1>
    //   <p>Images of different species pf cats. Lots of cats for your viewing pleasure.</p>
    //   <hr />

    //   <div className='Gallery'>
    //     {!isShowMore 
    //     ? cats.slice(0, 5).map(cat => <Cat cat={cat} />)
    //     : cats.map(cat => <Cat cat={cat} />)}
    //   </div>

    //   <button onClick={() => setIsShowMore(prev => !prev)}>{!isShowMore ? "VIEW MORE CATS" : "VIEW LESS CATS"}</button> */}
    // </div>
  );
}

export default App;