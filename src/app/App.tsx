import React, { useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getFetch } from '../Store/catSlice';
import { RootState } from '../Store/store';

import './styles/index.scss';
import MainPage from './components/MainPage';
import Authorize from './components/Authorize';

const App = () => {
  // это тест редакса
  const data = useSelector((state: RootState) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetch());
  }, [dispatch]);
  console.log(data);
  
  return (
    // <WelcomePage />
    // <Authorize />
    <MainPage />
  );
}

export default App;