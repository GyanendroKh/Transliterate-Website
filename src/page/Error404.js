import React, { useEffect, useContext } from 'react';
import { MainContext } from '../context/MainContext';

const Error404 = () => {
  const { setTitle } = useContext(MainContext);

  useEffect(() => {
    setTitle('About');
  }, [setTitle]);

  return <div>404 Not Found</div>;
};

export default Error404;
