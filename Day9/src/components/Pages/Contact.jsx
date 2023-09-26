import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/Contact.css';
import Dashboard from './Dashboard';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Thank you for your message!");

    setName('');
    setEmail('');
    setMessage('');
  };

  return (<div><Dashboard/>
    <div className="contact-container">
      <h1>Contact us</h1>
        <div className="form-box">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className='opinion-heading'>Send Your Opinion</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input className="qw" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="qw" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="qw" id="message" name="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>

            <button type="submit" className='submit-button'>Submit</button>
          </form>
        </div>
     </div>
     </div>
  );
}

export default Contact;