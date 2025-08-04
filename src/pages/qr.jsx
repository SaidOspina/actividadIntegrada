import React from 'react';

const QR = () => {
  return (
    <>
        <div className="qr-page">
            <div className="card">
                <div className="qr-container">
                <div className="qr-code">
                    <img
                    src="https://res.cloudinary.com/dqaxadodm/image/upload/v1754161169/qr-code-white-icon-vector-removebg-preview_dn3dz0.png"
                    alt="QR Code"
                    className="qr-image"
                    />
                </div>
                </div>
                        
                <div className="content">
                <h2 className="title">
                    Improve your front-end<br />
                    skills by building projects
                </h2>
                            
                <p className="description">
                    Scan the QR code to visit Frontend<br />
                    Mentor and take your coding skills to<br />
                    the next level
                </p>
                </div>
            </div>
        </div>
        
    </>
  );
};

export default QR;