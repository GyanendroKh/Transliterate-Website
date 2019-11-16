import React, { useContext, useEffect } from 'react';
import { MainContext } from '../context/MainContext';

const About = () => {
  const { setTitle } = useContext(MainContext);

  useEffect(() => {
    setTitle('About');
  }, [setTitle]);

  return <div>About</div>;
};

export default About;
