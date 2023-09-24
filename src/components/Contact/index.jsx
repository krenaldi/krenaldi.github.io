import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7hrfl7e',
        'template_rjn1m5w',
        form.current,
        'CSBVCfoV511qCKOUw'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        (error) => {
          alert('Failed to send the message, please try again\n', error.text);
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Contact me if you have any questions or if your interested in
            working with me. I'm always open to new opportunities and offering
            any advice.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    required="required"
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required="required"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required="required"
                  />
                </li>
                <li>
                  <textarea
                    type="text"
                    placeholder="Message"
                    name="message"
                    required="required"
                  />
                </li>
                <li>
                  <input type="submit" className="btn" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Kris Renaldi
          <br />
          South Plainfield, NJ, US
          <br />
          <span>krenaldi@comcast.net</span>
        </div>
        <div className="map-wrapper">
          <MapContainer
            center={[40.5807, -74.414]}
            zoom={12}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.5807, -74.414]}>
              <Popup className="popup">
                Near public transportation to NYC and Philadelphia
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
