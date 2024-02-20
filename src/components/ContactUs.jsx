import React from 'react'
import { Container } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <Container className="contact-section">
        <h2>Contact Us</h2>
        <div className="row">
        <div className="col-10 col-md-8 col-lg-6 contact-section">
            <form action="https://formbold.com/s/oJgkE" method="POST">
            <div className="mb-3">
                <label for="name" className="form-label">Firstname</label>
                <input type="text" className="form-control border-violet" id="name" name="firstname" />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control border-violet" id="email" name="email" />
            </div>
            <div className="mb-3">
                <label for="message">Message</label>
                <textarea className="form-control border-violet" placeholder="Leave a message here" id="message" name="message"></textarea>
            </div>
            <button type="submit" className="btn submit-button">Submit</button>
            </form>
        </div>
        </div>    
      </Container>
  )
}

export default ContactUs