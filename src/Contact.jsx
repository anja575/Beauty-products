import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Contact = () => {
    const [informations, setInformations] = useState(null);
    const [showMessage, setShowMessage] = useState();

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('https://ipapi.co/json/');
                setInformations(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        fetch();
    }, []);

    const signal = (event) => {
        event.preventDefault();
        setShowMessage("You have successfully sent your message!");
        event.target.reset();
    };

  return (
    <div className="contact">
      <h1>Contact us</h1>
    <div class="contact-form">
      <form onSubmit={signal}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Name' id="name" name="name" required/>
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname</label>
          <input type="text" placeholder='Surname' id="surname" name="surname" required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email' id="email" name="email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder='City' name="city" defaultValue={informations ? informations.city : ''}/>
        </div>
        <div className="form-group">
          <label htmlFor="region">Region</label>
          <input type="text" id="region" placeholder='Region' name="region" defaultValue={informations ? informations.region : ''}/>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" placeholder='Country' name="country" defaultValue={informations ? informations.country_name : ''}/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder='Message' name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
        {showMessage}
      </form>
      </div>
      </div>
  )
}

export default Contact