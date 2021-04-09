import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ApolloProvider from './ApolloProvider';
import Launches from './components/Launches';
import Launch from './components/Launch';
import Footer from './components/Footer';

import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <ApolloProvider>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 300, display: 'block', margin: 'auto' }}
        />
        <Router>
          <Switch>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
