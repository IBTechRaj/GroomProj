import React from 'react';
import './contact.css';

const Contact = () => {
  return (

    <section id="contact">
      <div className="container-wrapper">
        <div className="container contact-info">
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <div className="contact-form">
                <address>
                  <strong>Mike's Car Wash.</strong><br />
                  <abbr title="Phone">P: 9999999999
                  </abbr></address>
              </div>
            </div>
            <div className="col-sm-8 col-md-8">
              <div className="contact-form">
                {/*NOTE: Update your email Id in "contact_me.php" file in order to receive emails from your contact form*/}
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="control-group">
                    <div className="controls">
                      <input type="text" className="form-control" placeholder="Full Name" id="name" required data-validation-required-message="Please enter your name" />
                      <p className="help-block" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="controls">
                      <input type="email" className="form-control" placeholder="Email" id="email" required data-validation-required-message="Please enter your email" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="controls">
                      <textarea rows={10} cols={100} className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter your message" minLength={5} data-validation-minlength-message="Min 5 characters" maxLength={999} style={{ resize: 'none' }} defaultValue={""} />
                    </div>
                  </div>
                  <div id="success" />
                  {/* For success/fail messages */}
                  <button type="submit" className="btn btn-primary pull-right">
                    Send</button><br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact