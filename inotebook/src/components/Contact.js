import React from 'react';
import whatsappImage from '../img/whatsapp.png';
import gmailImage from '../img/gmail.png';
import linkedinImage from '../img/linkedin.png';

export default function Contact() {
  return (
    <>
      <div className="container mt-1">
        <div className="text-center">
          <h1 className="mb-4">
            <span className="text-primary">GET IN TOUCH</span>
          </h1>
          <h6 className="text-muted">Click any of them to Contact Me</h6>
          <hr />
        </div>

        <div className="row justify-content-center">
          {/* WhatsApp */}
          <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
            <a href="https://wa.me/+917857083594" className="text-decoration-none">
              <img src={whatsappImage} alt="WhatsApp" className="img-fluid mb-2" style={{ width: '84px' }} />
              <h6 className="text-dark">WhatsApp</h6>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
            <a href="https://www.linkedin.com/in/chandan-kumar-saw-09262230b/" className="text-decoration-none">
              <img src={linkedinImage} alt="LinkedIn" className="img-fluid mb-2" style={{ width: '84px' }} />
              <h6 className="text-dark">LinkedIn</h6>
            </a>
          </div>

          {/* Gmail */}
          <div className="col-12 col-sm-6 col-md-4 text-center mb-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chandan020803@gmail.com&su=Hello&body=Hi%20Chandan,%20I%20wanted%20to%20reach%20out."
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <img src={gmailImage} alt="Gmail" className="img-fluid mb-2" style={{ width: '84px' }} />
              <h6 className="text-dark">Mail</h6>
            </a>
          </div>
        </div>

        <hr />

        <div className="text-center mt-4">
          <h5 className="mb-3">Reach Out to Me!</h5>
          <p className="text-muted">
            I’m here to assist with any questions, project inquiries, or collaboration opportunities you might have.
            Whether you’re looking for support with MERN Stack development, need advice, or just want to connect, feel
            free to get in touch. You can use the links above to contact me. I look forward to hearing from you! <br />
            <h3><b>Thanking You..!</b></h3>
          </p>
        </div>
      </div>
    </>
  );
}
