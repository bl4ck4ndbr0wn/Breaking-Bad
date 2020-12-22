import {ConnectedRouter} from 'connected-react-router';
import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import routes from './routes';
import history from './utils/history';


function App() {
  function getRoutes(routes) {
    return routes.map((prop, key) => {
      return <Route
        path={('', prop.path)}
        component={prop.component} key={key}
      />;
    });
  }

  return (
    <ConnectedRouter history={history}>
      <div className="flex flex-col h-screen justify-between bg-white">
        <Header/>
        <Search/>
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/"/>
        </Switch>
        <Footer/>
      </div>
    </ConnectedRouter>
  );
}

export default App;
