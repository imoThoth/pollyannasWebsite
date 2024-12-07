import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./portfolio.css";
import headerImage from '../../images/pollyNavbarNewer.jpg';
import pollyannaIcequeen from '../../images/pollyannaIcequeen.jpg';
import pollyannaMacbeth from '../../images/pollyannaMacbeth.jpg';
import pollyannaMuchado from '../../images/pollyannaMuchado.jpg';
import pollyannaTestIImageSun from '../../images/pollyannaTestIImageSun.jpg';
import pollyannaTestImageSeat from '../../images/pollyannaTestImageSeat.jpg';
import pollyannaTestImg from '../../images/pollyannaTestImg.jpg';
import pollyNavbarSmall from '../../images/pollyNavbarSmall.jpg';

const portfolioData = [
  { id: 1, title: "Max Roach 100", year: 2024, location: "The Joyce Theater, New York, United States", type: "Costume Design", videography: "Short Film", src: pollyannaIcequeen},
  { id: 2, title: "Aida", year: 2023, location: "Metropolitan Opera, New York, United States, North America", type: "Costume Design", videography: "Theatre" , src: pollyannaMacbeth},
  { id: 3, title: "Annabelle", year: 2022, location: "The Joyce Theater, New York, United States", type: "Set Design", videography: "Short Film" , src: pollyannaMuchado},
  { id: 4, title: "Guess Who", year: 2021, location: "The Joyce Theater, New York, United States", type: "Set Design", videography: "Theatre" , src: pollyannaTestIImageSun},
  { id: 5, title: "Not So Afraid", year: 2020, location: "The Joyce Theater, New York, United States", type: "Costume Design", videography: "Theatre", src: pollyannaTestImageSeat},
  { id: 6, title: "The Smurf", year: 2019, location: "The Joyce Theater, New York, United States", type: "Set Design", videography: "Theatre", src: pollyannaTestImg },
  { id: 7, title: "Die Another Day", year: 2018, location: "The Joyce Theater, New York, United States", type: "Costume Theatre Design", videography: "Theatre", src: pollyNavbarSmall },
  { id: 8, title: "Die Another Day", year: 2018, location: "The Joyce Theater, New York, United States", type: "Costume Theatre Design", videography: "Theatre", src: pollyNavbarSmall },
  { id: 9, title: "Die Another Day", year: 2018, location: "The Joyce Theater, New York, United States", type: "Costume Theatre Design", videography: "Theatre", src: pollyNavbarSmall },
  { id: 10, title: "Die Another Day", year: 2018, location: "The Joyce Theater, New York, United States", type: "Costume Theatre Design", videography: "Theatre", src: pollyNavbarSmall },
  { id: 11, title: "Die Another Day", year: 2018, location: "The Joyce Theater, New York, United States", type: "Costume Theatre Design", videography: "Theatre", src: pollyNavbarSmall },
  { id: 12, title: "Die Another Day", year: 2018, location: "The Joyce Theater, New York, United States", type: "Costume Theatre Design", videography: "Theatre", src: pollyNavbarSmall },
  { id: 13, title: "Die Another Day", year: 2018, location: "The Joyce Theater, New York, United States", type: "Costume Theatre Design", videography: "Theatre", src: pollyNavbarSmall },
  { id: 14, title: "Die Another Day", year: 2018, location: "The Joyce Theater, New York, United States", type: "Costume Theatre Design", videography: "Theatre", src: pollyNavbarSmall },
  { id: 15, title: "Die Another Day", year: 2018, location: "The Joyce Theater, New York, United States", type: "Costume Theatre Design", videography: "Theatre", src: pollyNavbarSmall },
  { id: 16, title: "Die Another Day", year: 2018, location: "The Joyce Theater, New York, United States", type: "Costume Theatre Design", videography: "Theatre", src: pollyNavbarSmall },

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

  // New states for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;

  const handleItemClick = (id) => {
    const project = portfolioData.find(item => item.id === id);
    setSelectedProject(project);
  };

  // Calculate the items to display based on currentPage
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = portfolioDataState.slice(startIndex, endIndex);

  const hasNextPage = endIndex < portfolioDataState.length;

  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Header setPortfolioData={setPortfolioDataState} />
      <div className="portfolio">
        <div className="portfolio-list">
          {displayedItems.map((item) => (
            <div className="portfolio-item"
                 key={item.id}
                 onClick={() => handleItemClick(item.id)}
                 style={{
                   backgroundImage: `url(${item.src})`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   backgroundRepeat: 'no-repeat',
                   opacity: 1
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
        <div className="pagination-container">
            {currentPage > 0 && (
              <button className="prev-page-button" onClick={() => setCurrentPage(currentPage - 1)}>
                Previous Page
              </button>
            )}
            
            {hasNextPage && (
              <button className="next-page-button" onClick={handleNextPage}>
                Next Page
              </button>
            )}
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
