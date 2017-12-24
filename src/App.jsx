import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById('contents');
const NoMatch = () =><p>Page Not Fount</p>;

const RoutedApp = () => (
  <HashRouter >
    <div>
    <Redirect from="/" to="/issues" />
    <Route path="/issues" component={IssueList} />
    <Route path="/issues/:id" component={IssueEdit} />
    <Route path="*" component={NoMatch} />
    </div>
  </HashRouter>
);

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
  module.hot.accept();
}
