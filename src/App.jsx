import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import IssueList from './IssueList';
import IssueEdit from './IssueEdit';

const contentNode = document.getElementById('contents');
const NoMatch = () => <p>Page Not Fount</p>;

const RoutedApp = () => (
  <HashRouter >
    <div>
      <Switch>
        <Route path="/issues/:id" component={IssueEdit} />
        <Route path="/" component={IssueList} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  </HashRouter>
);

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
  module.hot.accept();
}
