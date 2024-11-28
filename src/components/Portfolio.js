import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./portfolio.css";
import headerImage from '../images/pollyNavbarSmall.jpg';
import pollyannaIcequeen from '../images/pollyannaIcequeen.jpg';
import pollyannaMacbeth from '../images/pollyannaMacbeth.jpg';
import pollyannaMuchado from '../images/pollyannaMuchado.jpg';
import pollyannaTestIImageSun from '../images/pollyannaTestIImageSun.jpg';
import pollyannaTestImageSeat from '../images/pollyannaTestImageSeat.jpg';
import pollyannaTestImg from '../images/pollyannaTestImg.jpg';
import pollyNavbarSmall from '../images/pollyNavbarSmall.jpg';


const portfolioData = [
  { id: 1, title: "Max Roach 100", year: 2024, location: "The Joyce Theater, New York, United States", type: "Costume Design", videography: "Short Film", src: pollyannaIcequeen},
  { id: 2, title: "Aida", year: 2023, location: "Metropolitan Opera, New York, United States, North America", type: "Costume Design", videography: "Theatre" , src: pollyannaMacbeth},
  { id: 3, title: "Annabelle", year: 2022, location: "The Joyce Theater, New York, United States", type: "Set Design", videography: "Short Film" , src: pollyannaMuchado},
  { id: 4, title: "Guess Who", year: 2021, location: "The Joyce Theater, New York, United States", type: "Set Design", videography: "Theatre" , src: pollyannaTestIImageSun},
  { id: 5, title: "Not So Afraid", year: 2020, location: "The Joyce Theater, New York, United States", type: "Costume Design", videography: "Theatre", src: pollyannaTestImageSeat},
  { id: 6, title: "The Smurf", year: 2019, location: "The Joyce Theater, New York, United States", type: "Set Design", videography: "Theatre", src: pollyannaTestImg },
  { id: 7, title: "Die Another Day", year: 2018, location: "The Joyce Theater, New York, United States", type: "Costume Theatre Design", videography: "Theatre", src: pollyNavbarSmall },
];

const Header = ({ setPortfolioData }) => {
  const [sortBy, setSortBy] = useState("Year");

  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    setSortBy(sortOption);
    let sortedData = [...portfolioData];

    switch (sortOption) {
      case "Costume Design":
        sortedData = sortedData.filter(item => item.type === "Costume Design").sort((a, b) => a.year - b.year);
        break;
      case "Set Design":
        sortedData = sortedData.filter(item => item.type === "Set Design").sort((a, b) => a.year - b.year);
        break;
      case "Theatre":
        sortedData = sortedData.filter(item => item.videography === "Theatre").sort((a, b) => a.year - b.year);
        break;
      case "Short Films":
        sortedData = sortedData.filter(item => item.videography === "Short Film").sort((a, b) => a.year - b.year);
        break;
      case "Year":
        sortedData.sort((a, b) => a.year - b.year);
        break;
      case "Year Descending":
        sortedData.sort((a, b) => b.year - a.year);
        break;
      default:
        break;
    }

    setPortfolioData(sortedData);
  };

  return (
    <header className="full-width-header">
      <div className="header-content">
        <h1>Portfolio</h1>
        <div className="sort-options">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortBy} onChange={handleSortChange}>
            <option value="Costume Design">Costume Design</option>
            <option value="Set Design">Set Design</option>
            <option value="Theatre">Theatre</option>
            <option value="Short Films">Short Films</option>
            <option value="Year">Year Ascending</option>
            <option value="Year Descending">Year Descending</option>
          </select>
        </div>
      </div>
      <div className="header-image">
        <img src = {headerImage} alt="Portfolio Background" />
      </div>
    </header>
  );
};

const Portfolio = () => {
  const [portfolioDataState, setPortfolioDataState] = useState(portfolioData);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleItemClick = (id) => {
    const project = portfolioData.find(item => item.id === id);
    setSelectedProject(project);
  };

  return (
    <div>
    <Header setPortfolioData={setPortfolioDataState} />
    <div className="portfolio">
      <div className="portfolio-list">
        {portfolioDataState.map((item) => (
          <div className="portfolio-item" 
               key={item.id} 
               onClick={() => handleItemClick(item.id)}
               style={{
                backgroundImage: `url(${item.src})`, // Dynamically set the image as the background
                backgroundSize: 'cover', // Ensure the image covers the entire div
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Avoid repeating the image
                opacity: 1 /* Slight transparency for better readability of text */
              }}>
            <h2>
              <Link to={`${item.title}`}>
                {item.title} ({item.year})
              </Link>
            </h2>
            <p>{item.location}</p>
          </div>
        ))}
      </div>

    </div>

    </div>
  );
};

export default Portfolio;