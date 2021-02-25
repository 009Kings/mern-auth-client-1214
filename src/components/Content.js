import { Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Bounties from './pages/Bounties';
import NewBounty from './pages/NewBounty';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('jwtToken');
  return <Route {...rest} render={(renderProps) => (
    token ?
    <Component {...rest} {...renderProps} /> :
    <Redirect to='/auth' />
  )} />
}

const Content = (props) => {
  return (
    <main>
      <Route exact path='/' component={Home} />
      <Route path='/auth' render={(renderProps) => (
        <Auth handleAuth={props.handleAuth} {...renderProps} />
      )} />
      <PrivateRoute 
        path='/profile' 
        component={Profile} 
        currentUser={props.currentUser} 
        handleAuth={props.handleAuth} 
      />
      <PrivateRoute 
        exact path='/bounties/add'
        component={NewBounty}
      />
      <PrivateRoute 
        path='/bounties'
        component={Bounties}
      />
    </main>
  );
}

export default Content;