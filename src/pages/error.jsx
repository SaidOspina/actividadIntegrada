import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-page">
      <div className="error-image">
        <img 
          src="https://res.cloudinary.com/dqaxadodm/image/upload/v1754334279/preview-removebg-preview_nl4vnb.png" 
          alt="Error 404"
        />
      </div>
      <div className="error-content">
        <h2 className="error-title">I have bad news for you</h2>
        <h3 className="error-subtitle">
          The page you are looking for might be removed or is temporarily unavailable
        </h3>
        <Link to="/" className="error-button">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;