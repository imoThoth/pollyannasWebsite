import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./portfolio.css";
import headerImage from '../../images/navBarNewNew.jpg';
import pollyannaIcequeen from '../../images/pollyannaIcequeen.jpg';
import pollyannaMacbeth from '../../images/pollyannaMacbeth.jpg';
import pollyannaMuchado from '../../images/pollyannaMuchado.jpg';
import pollyannaTestIImageSun from '../../images/pollyannaTestIImageSun.jpg';
import pollyannaTestImageSeat from '../../images/pollyannaTestImageSeat.jpg';
import pollyannaTestImg from '../../images/pollyannaTestImg.jpg';
import pollyNavbarSmall from '../../images/pollyNavbarSmall.jpg';

const portfolioData = [
  { id: 1, title: "Romeo and Juliet, Dreaming in English, Maid Marian", year: 2024, location: "White Horse Theatre, Germany", type: "Costume Design", btype: "Set Design",  ctype: "Theatre",src: pollyannaIcequeen},
  { id: 2, title: "Scratch", year: 2024, location: "Dog Sky Films, on location in England", type: "Costume Design", btype: "Set Design",  ctype: "Short Film",src: pollyannaMacbeth},
  { id: 3, title: "Enitans Game", year: 2024, location: " PunchDrunk Enrichment, London", type: "Costume", btype: "Theatre" , src: pollyannaMuchado},
  { id: 4, title: "One Hundred and Eighty", year: 2024, location: "Dark Avenue Film, on location in England", type: "Costume", btype: "Set Design", ctype: "Short Film", src: pollyannaTestIImageSun},
  { id: 5, title: "Twelfth Night", year: 2024, location: "London College of Music, London", type: "Costume", btype: "Theatre", src: pollyannaTestImageSeat},
  { id: 6, title: "The Lightning Thief ( UK Premier)", year: 2023, location: "London College of Music, London", type: "Costume", btype: "Theatre", src: pollyannaTestImg },
  { id: 7, title: "Drag Mx Great Britain", year: 2023, location: " Alnwick Castle", type: "Costume", videography: "Events", src: pollyNavbarSmall },
  { id: 8, title: "Latitude and Glastonbury Festivals", year: 2023, location: " Suffolk and Glastonbury", type: "Costume", btype: "Events", src: pollyNavbarSmall },
  { id: 9, title: "Wild Animal", year: 2023, location: "Backscatter Productions, on location in Wales ",type: "Costume", btype: " Set Design", ctype: "Short Film", src: pollyNavbarSmall },
  { id: 10, title: "Sunday in The Park with George", year: 2023, location: "London College of Music, London", type: "Costume", btype: "Theatre", src: pollyNavbarSmall },
  { id: 11, title: "5 Years", year: 2023, location: "Sheffield & UK Tour", type: "Costume”, btype “Theatre Design", ctype: "Theatre", src: pollyNavbarSmall },
  { id: 12, title: "Pippin", year: 2022, location: "London College Of Music, London", type: "Costume", btype:"Theatre", src: pollyNavbarSmall },
  { id: 13, title: "Happy Death Day", year: 2022, location: "Dog Sky Film, on location in England,", type: "Costume", btype: "Set Design", ctype: "Short Film", src: pollyNavbarSmall },
  { id: 14, title: "Glastonbury Festival and London Pride", year: 2022, location: "London and Glastonbury", type: "Costume", btype: " Events", src: pollyNavbarSmall },
  { id: 15, title: "Sink The Pink Farewell Ball", year: 2022, location: "Printworks,London ", type: "Costume", btype: "Events", src: pollyNavbarSmall },
  { id: 16, title: "Legally Blonde", year: 2022, location: "The Urdang Academy, London", type: "Costume ", btype: "Set Design", ctype: "Theatre",  src: pollyNavbarSmall },
  { id: 17, title: "Snow Queen", year: 2021, location: "Rabble, Reading", type: "Costume", btype: "Theatre",  src: pollyNavbarSmall },
  { id: 18, title: "Immersive 70s Marrakesh", year: 2021, location: " Private Client, London", type: "Costume", btype: "Events",  src: pollyNavbarSmall },
  { id: 19, title: "Immersive Hitchhikers Guide to The Galaxy", year: 2021, location: " Private Client, Shotgun Carousel, Amsterdam", type: "Costume", btype: "Events",  src: pollyNavbarSmall },
  { id: 20, title: "Fish Wife", year: 2021, location: "On location in Wales", type: "Costume", btype: "Set Design", ctype: "Short Film",  src: pollyNavbarSmall },
  { id: 21, title: "Park and Reed", year: 2020, location: " So and So Productions, on location in London", type: " Set Design", btype: "Short Film",  src: pollyNavbarSmall },
 { id: 22, title: "Oliver Twist", year: 2019, location: " White Horse Theatre Germany",type: "Costume Design", btype: "Set Design",  ctype: "Theatre",src: pollyannaIcequeen},
 { id: 23, title: "Taming of the Shrew and The Empty Chair", year: 2019, location: " White Horse Theatre Germany",type: "Costume Design", btype: "Set Design",  ctype: "Theatre",src: pollyannaIcequeen},
 { id: 24, title: "Sherlock Holmes and the Invisible Thing", year: 2019, location: " Rudolf Steiner House,London ", type: " Costume", btype: "Theatre",  src: pollyNavbarSmall },
 { id: 25, title: "Nice Work If You Can Get It", year: 2018, location: "The Gatehouse, London", type: " Set Design", btype: "Costume", ctype: "Theatre", src: pollyNavbarSmall },
 { id: 26, title: "Macbeth and The Tyrants Kiss", year: 2018, location:" White Horse Theatre Germany",type: "Costume Design", btype: "Set Design",  ctype: "Theatre",src: pollyannaIcequeen},
 { id: 27, title: "Prop Making", year: [2018,2019,2020,2021,2022,2023,2024], location: " London, Germany, Suffolk, France, China", type: " Prop Making", btype: "Theatre",  src: pollyNavbarSmall },
 { id: 28, title: "Scenic Painting", year: [2018,2019,2020,2021,2022,2023,2024], location: "London, Germany, Suffolk", type: " Prop Making", btype: "Theatre",  src: pollyNavbarSmall },
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
            <option value="Costume Design">Props And Scenic</option>
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
