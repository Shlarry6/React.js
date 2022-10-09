import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  const authCtx = useContext(AuthContext);

  const Greeting = () => {
    console.log(authCtx.profile);
    if (!authCtx.isLoggedIn) {
      return <h1>A Typical Page</h1>;
    } else if (authCtx.isLoggedIn && (authCtx.profile === null)) {
      return <h1>Welcome!</h1>;
    } else if (authCtx.isLoggedIn && (authCtx.profile !== null)) {
      return <h1>Welcome {authCtx.profile}!</h1>
    }
  };

  return (
    <header className={classes['main-header']}>
      <Greeting />
      <Navigation />
    </header>
  );
};

export default MainHeader;
