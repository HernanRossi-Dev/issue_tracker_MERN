import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch , Redirect} from 'react-router-dom';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById('contents');
const NoMatch = () =><p>Page Not Fount</p>;

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
