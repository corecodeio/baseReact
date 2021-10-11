import { useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import { Route, Redirect } from 'react-router';
import AuthContext from '../../context/auth-context';

const Layout = ({ exact, path, component: Component}) => {
  const authCtx = useContext(AuthContext);

  return (
    <Route exact={exact} path={path} render={(props) => {
      const userPages = <div>
                          <NavBar/>
                          <main>
                            <Component {...props}/>
                          </main>
                        </div>;
      if(authCtx.currentUser) return userPages;
      return <Redirect to='/login'/>
    }}/>
  );
}
export default Layout;