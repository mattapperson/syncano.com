import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';

export default () => {
  return (
    <DocumentTitle title="About">
      <div>
        <h2>About</h2>
        <Link to="/">Back to Home</Link>
      </div>
    </DocumentTitle>
  );
};
