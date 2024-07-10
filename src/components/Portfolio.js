import React, { useState } from 'react';
import "./portfolio.css";

const portfolioData = [
  { id: 1, title: "Max Roach 100", year: 2024, location: "The Joyce Theater, New York, United States", type: "Costume Design", videography: "Short Film" },
  { id: 2, title: "Aida", year: 2023, location: "Metropolitan Opera, New York, United States, North America", type: "Costume Design", videography: "Theatre" },
  { id: 3, title: "Annabelle", year: 2022, location: "The Joyce Theater, New York, United States", type: "Set Design", videography: "Short Film" },
  { id: 4, title: "Guess Who", year: 2021, location: "The Joyce Theater, New York, United States", type: "Set Design", videography: "Theatre" },
  { id: 5, title: "Not So Afraid", year: 2020, location: "The Joyce Theater, New York, United States", type: "Costume Design", videography: "Theatre" },
  { id: 6, title: "The Smurf", year: 2019, location: "The Joyce Theater, New York, United States", type: "Set Design", videography: "Theatre" },
  { id: 7, title: "Die Another Day", year: 2018, location: "The Joyce Theater, New York, United States", type: "Costume Theatre Design", videography: "Theatre" },
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
    <header>
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
    <div className="portfolio">
      <Header setPortfolioData={setPortfolioDataState} />
      <div className="portfolio-list">
        {portfolioDataState.map((item) => (
          <div className="portfolio-item" key={item.id} onClick={() => handleItemClick(item.id)}>
            <h2>{item.title} ({item.year})</h2>
            <p>{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
