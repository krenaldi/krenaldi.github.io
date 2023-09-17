import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
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
            <form>
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
                <li><input type="submit" className="btn" value="SEND" /></li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
