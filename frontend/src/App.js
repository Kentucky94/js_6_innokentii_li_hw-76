import React, {Fragment} from 'react';
import Main from "./containers/Main/Main";
import Messages from "./containers/Messages/Messages";
import {Switch, Route} from "react-router";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/messages' exact component={Messages} />
        <Route render={() => <h3>NOT FOUND</h3>} />
      </Switch>
    </Fragment>
  );
};

export default App;