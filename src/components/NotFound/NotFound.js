import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="col-12">
      <h5>404 not found page</h5>
      <Link to="/">Return to home</Link>
    </div>
  )
}
