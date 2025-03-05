import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./portfolio.css";
import headerImage from '../../images/navBarNewNew.jpg';
import emptyChair from '../../images/emptyChair/emptyChair4_L.jpg';
import punchdrunk5 from '../../images/enitansGame/punchdrunkEG5.jpg';
import FishWife17_L from '../../images/fish_wife/FishWife17_L.jpg';
import fiveYears1_L from '../../images/fiveYears/fiveYears1_L.jpg';
import hikers10_P from '../../images/HitchikerWebsite/hikers10_P.jpg';
import legally13_L from '../../images/legallyBlonde/legally13_L.jpg';
import whiteHorseTheatreMacbeth from '../../images/macbeth/whiteHorseTheatreMacbeth10_P.jpg';
import mimiDragMx1_P from '../../images/mimiDragMX/mimiDragMx1_P.jpg';
import mimi from '../../images/mimiGlastoPride/mimi-GP3_P.jpg';
import mimiLat4_P from '../../images/mimiLat/mimiLat4_P.jpg';
import sinkPink from '../../images/mimiSinkThePink/mimiSTP4_P.jpg';
import moroccoCarousel from '../../images/Morroccan/moroccoCarousel.jpg';
import niceWork15_P from '../../images/niceWorkIfYouCanGetIt/niceWork15_P.jpg';
import parkAndReed6_L from '../../images/parkAndReed/parkAndReed6_L.jpg';
import percy6_P from '../../images/percyJackson/percy6_P.jpg';
import scratch1 from '../../images/scratch/scratch1_L.jpg';
import sherlockHolmes6_L from '../../images/sherlockHolmes/sherlockHolmes6_L.jpg';
import snowQ3_P from '../../images/snowQ/snowQ3_P.jpg';
import sunday6_P from '../../images/sunday/sunday6_P.jpg';
import tamingOfTheShrew9_P from '../../images/tamingOfTheShrew/tamingOfTheShrew9_P.jpg';
import twelfthNight1_L from '../../images/twelfthNight/twelfthNight1_L.jpg';
import romeoandJuliet1 from '../../images/whiteHorse24/romeoandJuliet1_L.jpg';
import wildAnimal14_P from '../../images/wildShortAnimal/wildAnimal2_L.jpg';
//import wintersTale4_L from '../../images/wintersTale/wintersTale4_L.jpg';
import oneEIghty from '../../images/oneEighty/oneHundredAndEighty1.jpg';
import wildanimalp from '../../images/wildShortAnimal/wildAnimal5_L.jpg';
import sundayp from '../../images/sunday/sunday9_L.jpg';
import fiveYearsStolenJacket from '../../images/fiveYears/fiveYears3_L.jpg';
import glastoport from '../../images/mimiGlastoPride/mimi-GP6_L.jpg';
import legallyport from '../../images/legallyBlonde/legally2_L.jpg'
import snowport from'../../images/snowQ/snowQ4_L.jpg'
import morrocoport from '../../images/Morroccan/morrocan4_L.jpg';








import pollyannaMacbeth from '../../images/pollyannaMacbeth.jpg';
import whiteHorseTheatreTyrantsKiss1_L from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss1_L.jpg";
//import pollyannaMuchado from '../../images/pollyannaMucha.jpg';
//import pollyannaTestIImageSun from '../../images/pollyannaTestIImageSun.jpg';
//import pollyannaTestImageSeat from '../../images/pollyannaTestImageSeat.jpg';
//import pollyannaTestImg from '../../images/pollyannaTestImg.jpg';
import pollyNavbarSmall from '../../images/pollyNavbarSmall.jpg';
import macbethpotfolio from '../../images/macbeth/whiteHorseTheatreMacbeth6_P.jpg';

const portfolioData = [
  { id: 1, title: "Romeo and Juliet, Dreaming in English, Maid Marian", year: 2024, location: "White Horse Theatre, Germany", type: "Costume Design", btype: "Set Design",  ctype: "Theatre", src: romeoandJuliet1},
  { id: 2, title: "Scratch", year: 2024, location: "Dog Sky Films, on location in England", type: "Costume Design", btype: "Set Design",  ctype: "Short Film",src: scratch1},
  { id: 3, title: "Enitans Game", year: 2024, location: " PunchDrunk Enrichment, London", type: "Costume", btype: "Theatre" , src: punchdrunk5},
  { id: 4, title: "One Hundred and Eighty", year: 2024, location: "Dark Avenue Film, on location in England", type: "Costume", btype: "Set Design", ctype: "Short Film", src: oneEIghty},
  { id: 5, title: "Twelfth Night", year: 2024, location: "London College of Music, London", type: "Costume", btype: "Theatre", src: twelfthNight1_L},
  { id: 6, title: "The Lightning Thief (UK Premier)", year: 2023, location: "London College of Music, London", type: "Costume", btype: "Theatre", src: percy6_P },
  { id: 7, title: "Drag Mx Great Britain", year: 2023, location: " Alnwick Castle", type: "Costume", videography: "Events", src: mimiDragMx1_P },
  { id: 8, title: "Latitude, Mighty Hoopla and Glastonbury Festivals", year: 2023, location: " Suffolk and Glastonbury", type: "Costume", btype: "Events", src: mimiLat4_P },
  { id: 9, title: "Wild Animal", year: 2023, location: "Backscatter Productions, on location in Wales ",type: "Costume", btype: " Set Design", ctype: "Short Film", src: wildanimalp },
  { id: 10, title: "Sunday in The Park with George", year: 2023, location: "London College of Music, London", type: "Costume", btype: "Theatre", src: sundayp },
  { id: 11, title: "5 Years", year: 2023, location: "Sheffield & UK Tour", type: "Costume”, btype “Theatre Design", ctype: "Theatre", src: fiveYearsStolenJacket },
  { id: 13, title: "Happy Death Day", year: 2022, location: "Dog Sky Film, on location in England,", type: "Costume", btype: "Set Design", ctype: "Short Film", src: pollyannaMacbeth },
  { id: 14, title: "Glastonbury Festival and London Pride", year: 2022, location: "London and Glastonbury", type: "Costume", btype: " Events", src: glastoport },
  { id: 15, title: "Sink The Pink Farewell Ball", year: 2022, location: "Printworks,London ", type: "Costume", btype: "Events", src: sinkPink },
  { id: 16, title: "Legally Blonde", year: 2022, location: "The Urdang Academy, London", type: "Costume ", btype: "Set Design", ctype: "Theatre",  src: legallyport},
  { id: 17, title: "Snow Queen", year: 2021, location: "Rabble, Reading", type: "Costume", btype: "Theatre",  src: snowport },
  { id: 18, title: "Immersive 70s Marrakesh", year: 2021, location: " Private Client, London", type: "Costume", btype: "Events",  src: morrocoport },
  { id: 19, title: "Immersive Hitchhikers Guide to The Galaxy", year: 2021, location: " Private Client, Shotgun Carousel, Amsterdam", type: "Costume", btype: "Events",  src: hikers10_P },
  { id: 20, title: "Fish Wife", year: 2021, location: "On location in Wales", type: "Costume", btype: "Set Design", ctype: "Short Film",  src: FishWife17_L },
  { id: 21, title: "Park and Reed", year: 2020, location: " So and So Productions, on location in London", type: " Set Design", btype: "Short Film",  src: parkAndReed6_L },
  { id: 22, title: "Taming of the Shrew", year: 2019, location: " White Horse Theatre Germany",type: "Costume Design", btype: "Set Design",  ctype: "Theatre",src: tamingOfTheShrew9_P},
  { id: 23, title: "The Empty Chair and Oliver Twist", year: 2019, location: " White Horse Theatre Germany",type: "Costume Design", btype: "Set Design",  ctype: "Theatre",src: emptyChair},
  { id: 24, title: "Sherlock Holmes and the Invisible Thing", year: 2019, location: " Rudolf Steiner House,London ", type: " Costume", btype: "Theatre",  src: sherlockHolmes6_L },
  { id: 25, title: "Nice Work If You Can Get It", year: 2018, location: "The Gatehouse, London", type: " Set Design", btype: "Costume", ctype: "Theatre", src: niceWork15_P },
  { id: 26, title: "The Tyrants Kiss", year: 2018, location:" White Horse Theatre Germany",type: "Costume Design", btype: "Set Design",  ctype: "Theatre", src: whiteHorseTheatreTyrantsKiss1_L},
  { id: 27, title: "Macbeth", year: 2018, location:" White Horse Theatre Germany",type: "Costume Design", btype: "Set Design",  ctype: "Theatre",src: macbethpotfolio},
  { id: 28, title: "Prop Making", year: [2016-2024], location: " London, Germany, Suffolk, France, China", type: " Prop Making", btype: "Theatre",  src: pollyNavbarSmall },
  { id: 29, title: "Scenic Painting", year: [2016-2024], location: "London, Germany, Suffolk", type: " Prop Making", btype: "Theatre",  src: pollyNavbarSmall },
  { id: 30, title: "Scenic Painting", year: [2018,2019,2020,2021,2022,2023,2024], location: "London, Germany, Suffolk", type: " Prop Making", btype: "Theatre",  src: pollyNavbarSmall },

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
