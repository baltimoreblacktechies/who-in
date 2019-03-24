import React from 'react';
import { connect } from 'react-redux';
import { Link, Router, Route } from 'react-router-dom';
import { Box, Button } from 'grommet';

import { history } from './store/store';
import './styles/App.scss';
import AppBar from './AppBar';
import Homepage from './components/homepage';
import Login from './components/login';
import NewEvent from './components/NewEvent/NewEvent';

const App = () => (
  <Router history={history}>
    <div>
      <header>
        <AppBar>
          <Box>
            <Link to="/">Who&apos;s In</Link>
          </Box>
          <Box direction="row">
            <Button color="primary" variant="outlined">
              <Link to="/login">Login</Link>
            </Button>
          </Box>
        </AppBar>
      </header>

      <main>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/newEvent" render={() => <NewEvent />} />
        <Route exact path="/login" component={Login} />
        {/* <Route render={() => (<div>Miss</div>)} /> */}
        {/* <Route exact path="/about-us" component={About} /> */}
      </main>
    </div>
  </Router>
);

export default connect()(App);
