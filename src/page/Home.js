import React, { useEffect, useContext } from 'react';
import { MainContext } from '../context/MainContext';

const Home = () => {
  const { setTitle } = useContext(MainContext);

  useEffect(() => {
    setTitle('Home');
  }, [setTitle]);

  return <div>Home</div>;
};

export default Home;
