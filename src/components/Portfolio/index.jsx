import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getPortfolio();
  }, []);

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'));
    // console.log(querySnapshot);

    const results = querySnapshot.docs
      .map((doc) => doc.data())
      .sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1));
    setPortfolio(results)
  };

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt={port.title}
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button
                  className="btn"
                  onClick={() => window.open(port.repo_url)}
                >
                  View Code
                </button>
                <button
                  className="btn"
                  onClick={() => window.open(port.deploy_url)}
                >
                  View App
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
