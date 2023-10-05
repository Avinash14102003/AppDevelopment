import React from 'react';
import '../../assets/css/Terms.css'; 
import Dashboard from './Dashboard';

function Terms() {
  return (<div><Dashboard/>
    <div>
    <div className="terms-and-conditions-container">
      <div className="close-button">
      </div>
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to our Terms and Conditions page. These terms and conditions govern your use of our services
        and website. By accessing or using our services, you agree to comply with and be bound by these terms.
      </p>
      <h2>Use of Our Services</h2>
      <p>
        By using our services, you agree to:
      </p>
      <ul>
        <li>Use our services for lawful purposes only.</li>
        <li>Not use our services for any illegal, harmful, or unauthorized activities.</li>
        <li>Not interfere with the proper operation of our services.</li>
        <li>Not attempt to gain unauthorized access to our services or systems.</li>
      </ul>
      <h2>Intellectual Property</h2>
      <p>
        All content and materials available on our website and services, including but not limited to text,
        graphics, logos, images, audio, and video, are protected by intellectual property rights.
      </p>
      <p>
        You may not reproduce, distribute, modify, or create derivative works from any content or materials
        on our website without our prior written consent.
      </p>
      
      
    </div></div></div>
  );
}

export default Terms;