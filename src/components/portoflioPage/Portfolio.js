import React, { useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
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
import hikersport from'../../images/HitchikerWebsite/hikers3_L.jpg';
import fishport from'../../images/fish_wife/fishWife8_L.jpg';
import parkport from'../../images/parkAndReed/parkAndReed1_L.jpg';
import tamingport from'../../images/tamingOfTheShrew/tamingOfTheShrew10_L.jpg';
import emptyport from '../../images/emptyChair/emptyChair8_L.jpg';
import sherlockport from '../../images/sherlockHolmes/sherlockHolmes1_L.jpg';
import niceport from '../../images/niceWorkIfYouCanGetIt/niceWork16_L.jpg';
import tyrantsport from '../../images/emptyChair/whiteHorseTheatreTyrantsKiss7_L.jpg';
import deathport from '../../images/happyDeathDay/happyDeath7.jpg';
import sinkport from '../../images/mimiSinkThePink/mimiSTP6_P.jpg';
import romeoport from '../../images/whiteHorse24/romeoandjuliet4_L.jpg'

import pollyannaMacbeth from '../../images/pollyannaMacbeth.jpg';
import whiteHorseTheatreTyrantsKiss1_L from "../../images/emptyChair/whiteHorseTheatreTyrantsKiss1_L.jpg";
//import pollyannaMuchado from '../../images/pollyannaMucha.jpg';
//import pollyannaTestIImageSun from '../../images/pollyannaTestIImageSun.jpg';
//import pollyannaTestImageSeat from '../../images/pollyannaTestImageSeat.jpg';
//import pollyannaTestImg from '../../images/pollyannaTestImg.jpg';
import pollyNavbarSmall from '../../images/pollyNavbarSmall.jpg';
//import windowMaking from '../../images/scenic/scenicWindowRoom.jpg';
//import propsportfolio from '../../images/props/props15.jpg';
import propsport from '../../images/props/props18.jpg';
import scenicport from '../../images/scenic/scenicPainting29.jpg';


import macbethpotfolio from '../../images/macbeth/whiteHorseTheatreMacbeth6_P.jpg';

const portfolioData = [
  { id: 1, title: "Romeo and Juliet, Dreaming in English, Maid Marian", year: 2024, location: "Set and Costume Designer, White Horse Theatre, Germany", type: ["Costume", "Set Design", "Theatre"], src: romeoport },
  { id: 2, title: "Scratch", year: 2024, location: "Short Film - Production and Costume Designer, Dog Sky Films, on location in England", type: ["Costume", "Set Design", "Film & TV"], src: scratch1 },
  { id: 3, title: "Enitans Game", year: 2024, location: "Costume Designer/ Supervisor, PunchDrunk Enrichment, London", type: ["Costume", "Theatre"], src: punchdrunk5 },
  { id: 4, title: "One Hundred and Eighty", year: 2024, location: "Short Film - Production and Costume Designer, Dark Avenue Film, on location in England", type: ["Costume", "Set Design", "Film & TV"], src: oneEIghty },
  { id: 5, title: "Twelfth Night", year: 2024, location: "Costume Designer/ Supervisor, London College of Music, London", type: ["Costume", "Theatre"], src: twelfthNight1_L },
  { id: 6, title: "The Lightning Thief (UK Premier)", year: 2023, location: "Costume Designer/ Supervisor, London College of Music, London", type: ["Costume", "Theatre"], src: percy6_P },
  { id: 7, title: "Drag Mx Great Britain", year: 2023, location: "Costume Designer/ Maker, Alnwick Castle", type: ["Costume", "Events"], src: mimiDragMx1_P },
  { id: 8, title: "Latitude, Mighty Hoopla and Glastonbury Festivals", year: 2023, location: "Costume Designer/ Maker, Suffolk and Glastonbury", type: ["Costume", "Events"], src: mimiLat4_P },
  { id: 9, title: "Wild Animal", year: 2023, location: "Short Film - Production and Costume Designer, Backscatter Productions, on location in Wales", type: ["Costume", "Set Design", "Film & TV"], src: wildanimalp },
  { id: 10, title: "Sunday in The Park with George", year: 2023, location: "Costume Designer/ Supervisor, London College of Music, London", type: ["Costume", "Theatre"], src: sundayp },
  { id: 11, title: "5 Years", year: 2023, location: "Set and Costume Designer, Sheffield & UK Tour", type: ["Costume", "Set Design", "Theatre"], src: fiveYearsStolenJacket },
  // { id: 12, title: "Pippin", year: 2022, location: "London College Of Music, London", type: ["Costume", "Theatre"], src: pollyNavbarSmall },
  { id: 13, title: "Happy Death Day", year: 2022, location: "Short Film - Production Designer, Dog Sky Film, on location in England", type: ["Set Design", "Film & TV"], src: deathport },
  { id: 14, title: "Glastonbury Festival and London Pride", year: 2022, location: "Costume Designer/ Maker, London and Glastonbury", type: ["Costume", "Events"], src: glastoport },
  { id: 15, title: "Sink The Pink Farewell Ball", year: 2022, location: "Costume Designer/ Maker, London", type: ["Costume", "Events"], src: sinkport },
  { id: 16, title: "Legally Blonde", year: 2022, location: "Set and Costume Designer, The Urdang Academy, London", type: ["Costume", "Set Design", "Theatre"], src: legallyport },
  { id: 17, title: "Snow Queen", year: 2021, location: "Costume Designer, Rabble Theatre, Rabble, Reading", type: ["Costume", "Theatre"], src: snowport },
  { id: 18, title: "Immersive 70s Marrakesh", year: 2021, location: "Costume Designer/ Supervisor, Private Client, London", type: ["Costume", "Events"], src: morrocoport },
  { id: 19, title: "Immersive Hitchhikers Guide to The Galaxy", year: 2021, location: "Costume Designer/ Supervisor/ Maker, Private Client, Shotgun Carousel, Amsterdam", type: ["Costume", "Events"], src: hikersport },
  { id: 20, title: "Fish Wife", year: 2021, location: "Short Film - Production and Costume Designer, On location in Wales", type: ["Costume", "Set Design", "Film & TV"], src: fishport },
  { id: 21, title: "Park and Reed", year: 2020, location: "Comedy TV Series - Proof of Concept - Production Designer, So and So Productions, on location in London", type: ["Set Design", "Film & TV"], src: parkport },
  { id: 22, title: "Taming of the Shrew", year: 2019, location: "Set and Costume Designer, White Horse Theatre Germany", type: ["Costume", "Set Design", "Theatre"], src: tamingport },
  { id: 23, title: "The Empty Chair and Oliver Twist", year: 2019, location: "Set and Costume Deisgner, White Horse Theatre Germany", type: ["Costume", "Set Design", "Theatre"], src: emptyport },
  { id: 24, title: "Sherlock Holmes and the Invisible Thing", year: 2019, location: "Costume Designer, Rudolf Steiner House, London", type: ["Costume", "Theatre"], src: sherlockport },
  { id: 25, title: "Nice Work If You Can Get It", year: 2018, location: "Set and Costume Designer, Upstairs at The Gatehouse, London", type: ["Set Design", "Costume", "Theatre"], src: niceport },
  { id: 26, title: "The Tyrants Kiss", year: 2018, location: "Set and Costume Designer, White Horse Theatre Germany", type: ["Costume", "Set Design", "Theatre"], src: tyrantsport },
  { id: 27, title: "Macbeth", year: 2018, location: "Set and Costume Designer, White Horse Theatre Germany", type: ["Costume", "Set Design", "Theatre"], src: macbethpotfolio },
  { id: 28, title: "Prop Making", year: [2016, 2024], location: "London, Germany, Suffolk, France, China", type: ["Props And Scenic", "Theatre"], src: propsport },
  { id: 29, title: "Scenic Painting", year: [2016, 2024], location: "London, Germany, Suffolk", type: ["Props And Scenic", "Theatre"], src: scenicport },
  { id: 30, title: "Scenic Painting II", year: [2018, 2019, 2020, 2021, 2022, 2023, 2024], location: "London, Germany, Suffolk", type: ["Props And Scenic", "Theatre"], src: pollyNavbarSmall }
];

const Header = ({ setPortfolioData, setCurrentPage }) => {
  const [sortBy, setSortBy] = useState("Year");

  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    setSortBy(sortOption);
    let sortedData = [...portfolioData];

    setCurrentPage(0); 

    switch (sortOption) {
      case "Costume":
        sortedData = sortedData.filter(item => item.type.includes("Costume") ).sort((a, b) => b.year - a.year);
        break;
      case "Set Design":
        sortedData = sortedData.filter(item => item.type.includes("Set Design")).sort((a, b) => b.year - a.year);
        break;
      case "Theatre":
        sortedData = sortedData.filter(item => item.type.includes("Theatre")).sort((a, b) => b.year - a.year);
        break;
      case "Film & TV":
        sortedData = sortedData.filter(item => item.type.includes("Film & TV")).sort((a, b) => b.year - a.year);
        break;
      case "Events":
        sortedData = sortedData.filter(item => item.type.includes("Events")).sort((a, b) => b.year - a.year);
        break;
      case "Props And Scenic":
          sortedData = sortedData.filter(item => item.type.includes("Props And Scenic")).sort((a, b) => b.year - a.year);
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
            <option value="Props And Scenic">Props And Scenic</option>
            <option value="Costume">Costume</option>
            <option value="Set Design">Set Design</option>
            <option value="Theatre">Theatre</option>
            <option value="Events">Events</option>
            <option value="Film & TV">Film & TV</option>
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
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get('page')) || 0;

  const [currentPage, setCurrentPage] = useState(initialPage);     // New states for pagination

  const itemsPerPage = 7;

  const handleItemClick = (id) => {
    const project = portfolioData.find(item => item.id === id);
    setSelectedProject(project);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`?page=${newPage}`);
  };
  

  // Calculate the items to display based on currentPage
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = portfolioDataState.slice(startIndex, endIndex);

  const hasNextPage = endIndex < portfolioDataState.length;

  // const handleNextPage = () => {
  //   if (hasNextPage) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  return (
    <div>
      <Header setPortfolioData={setPortfolioDataState} setCurrentPage={setCurrentPage} />
      <div className="portfolio">
        <div className="portfolio-list">
          {displayedItems.map((item) => {
            const formattedYear = Array.isArray(item.year) ? item.year.join(', ') : item.year;

            return (
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
                  <Link to={`${item.title}?page=${currentPage}`}>
                    {item.title} ({formattedYear})
                  </Link>
                </h2>
                <p>{item.location}</p>
              </div>
            );
          })}
        </div>
        <div className="pagination-container">
          {currentPage > 0 && (
            <button className="prev-page-button" onClick={() => handlePageChange(currentPage - 1)}>
              Previous Page
            </button>
          )}
          
          {hasNextPage && (
            <button className="next-page-button" onClick={() => handlePageChange(currentPage + 1)}>
              Next Page
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
