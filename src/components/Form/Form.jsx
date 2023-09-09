// import React from "react";

import './form.css';
import React, { useState } from 'react';
import { firestore } from './firebase';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, contact, age, course, city, country);

    firestore
      .collection('messages')
      .add({
        name,
        email,
        contact,
        age,
        course,
        city,
        country,
      })
      .then(() => {
        setName(''),
        setEmail(''),
        setContact(''),
        setAge(''),
        setCourse(''),
        setCity(''),
        setCountry('');
      })
      .catch((error) => console.error('Error submitting data: ', error));
  };

  return (
    <div className="form">
      <h2 className="headingContent">hire a trainer</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            autoComplete="off"
            required
          />

          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            autoComplete="off"
            required
          />

          <input
            type="text"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Contact number"
            autoComplete="off"
            required
          />

          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="your budget"
            autoComplete="off"
            required
          />

          <input
            type="text"
            name="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="training goal"
            autoComplete="off"
            required
          />

          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Your address"
            autoComplete="off"
            required
          />

          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Your city"
            autoComplete="off"
            required
          />

          <button type="submit">Submit</button>
        </form>
        {/* {formSubmitted && <p>Form submitted!</p>} */}
      </div>
    </div>
  );
}

export default Form;
