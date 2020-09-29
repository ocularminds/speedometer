import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Hometwo from './components/pages/Hometwo';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Blogleft from './components/pages/Blogleft';
import Blogdetail from './components/pages/Blogdetail';
import Service from './components/pages/Service';
import Servicedetail from './components/pages/Servicedetail';
import Comingsoon from './components/pages/Comingsoon';
import Finance from './components/pages/Finance';
import CalculatorPage from './components/pages/CalculatorPage';
import Team from './components/pages/Team';
import Userdashboard from './components/pages/Userdashboard';
import Error from './components/pages/Error';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home-two' component={Hometwo}/>
        <Route path='/about' component={About}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/blog-left' component={Blogleft}/>
        <Route path='/blog-detail' component={Blogdetail}/>
        <Route path='/service' component={Service}/>
        <Route path='/service-detail' component={Servicedetail}/>
        <Route path='/coming-soon' component={Comingsoon}/>
        <Route path='/invoice' component={Finance}/>
        <Route path='/create-account' component={Finance}/>
        <Route path='/calculator' component={CalculatorPage}/>
        <Route path='/team' component={Team}/>
        <Route path='/dashboard' component={Userdashboard}/>
        <Route path='/404' component={Error}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
