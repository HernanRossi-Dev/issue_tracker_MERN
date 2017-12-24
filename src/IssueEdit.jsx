import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

export default class IssueEdit extends React.Component
{ // eslint -disable-line
  render() {
    return (
      <div>
        <p>this is a placeholder for editing issue {this.props.params.id}.</p>
        <Link to="/issues">Back to issue list</Link>
      </div>
    );
  }
}

IssueEdit.propTypes = {
  params: PropTypes.any.isRequired,
};
