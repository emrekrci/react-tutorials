import { useSelector } from 'react-redux';

import { Fragment } from 'react';
import Counter from './Counter';
import Header from './Header';
import Auth from './Auth';
import UserProfile from './UserProfile';


function App11() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile /> }
      {isAuth && <Counter /> }
      
    </Fragment>
  );
}

export default App11;
