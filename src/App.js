import { Container } from 'react-bootstrap';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import { Switch, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Help from './components/Help/Help';


const App = () => {
  return (
    <AuthProvider>
      <Container fluid className="ps-0 pe-0">
        <Switch>
          <Layout exact path="/" component={Dashboard}/>
          <Layout path="/about" component={About}/>
          <Layout path="/help" component={Help}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Container>
    </AuthProvider>
  );
}

export default App;
