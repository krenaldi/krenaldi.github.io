import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Dedicated Full Stack Developer with experience building Full-stack
            applications with functional UX/UI. Extensive customer service,
            technical training, and project management experience during my time
            at AT&T. Expertise in network troubleshooting & debugging code. I’m
            always going the extra mile according for my customers who’ve
            nominated me for company recognition for my outstanding service at
            AT&T. My mantra is “It’s better to be pro-active than reactive” from
            working on large scale projects. I love to learn new things as shown
            by my career path from Web Developer to Network Engineer to Subject
            Matter Expert to Full Stack Instructor/Developer.
          </p>
          <p>
            I'm skilled in the latest versions of HTML, CSS, JavaScript, Node.js, and React as well as database management using SQL and NoSQL databases. I also have experience deploying along CI/CD pipelines as well as strengths in technical training and writing,
            troubleshooting problems, debugging code, managing Git workflow and
            team collaboration and coaching.
          </p>
        </div>

        <div className="stage-cube-container">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNode} color="#347f2f" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
