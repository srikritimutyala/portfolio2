import React,{ useState,useEffect } from 'react';
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import SlidingText from './SlidingText';
import { Helmet } from 'react-helmet';
import Card from "./Card";
import Carousel from "./Carousel";
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { Link, Element, scroller } from 'react-scroll';
import { ProjectsContainer } from './ProjectCardStyle';
import ProjectCard from './ProjectCard';
import { ProjectData } from './ProjectData';
import LayoutCards from "./LayoutCards";
import Contact from "./Contact"


function App() {

  const [openNav, setOpenNav] = React.useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const buttonClasses = `bg-${isClicked ? 'red' : 'blue'}-500 text-white px-4 py-2 rounded-md`;

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );


  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="/images/language.webp" title="Skills" paragraph="Some of the languages I am familiar with are javascript,HTML,CSS,python and java" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="/images/classes.avif" title="Classes" paragraph="Some classes I've taken/taking are AP Computer science principles, AP Computer science A, AP calc BC, AP physics 1 and 2" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="/images/mathTeam.webp" title="Math Team" paragraph="I joined math team my freshman year and I am so glad I did. Math team was a lot of fun because everyone worked together and actually enjoyed math. My favortite part was when we went to ISU for state last year." />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="/images/debate.png" title="Debate" paragraph="This is my 3rd year doing public forum debate. I love debate a lot because it gives me an accuse to argue over something and I do it with my friend." />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="/images/ACSL.png" title="ACSL" paragraph="I'm also a part of a new club that started last year called coding team. It just started but essentially we compete in cs competitions and I'm excited to start." />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="/images/CSK.png" title="CSK" paragraph="I joined CompSciKids this year. Even though I just started it is really fun because the kids are really funny and cute. It's also nice to teach kids about coding" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="/images/apScholar.png" title="AP scholar award" paragraph="I got the AP scholar award for the past 2 years by getting 5s on my AP tests" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="/images/SASA.jpg" title="SASA" paragraph="I've also been a part of SASA for the past 2 years. This year we are planning to do more to draw attention to SASA such as fundraisers and festivals. I am so excited to be apart of organizing such events." />
      )
    }
  ];

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 20;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-button">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
    
    <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@800&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@900&display=swap" rel="stylesheet"/>

        </Helmet>
     <div className="bg-black min-h-screen ">
        <h1>hh</h1>
        <nav className="container mx-auto mt-[-10px] flex items-center bg-grey rounded-lg py-0 justify-between text-blue-gray-900 height-500 " style={{ maxWidth: "1200px",maxHeight:"2000px" }}>
        <div className="container mx-auto px-10 flex height-200 items-center justify-center">
          <ul className="flex gap-6 text-white">
          <li>
            <Link to="aboutSection" smooth={true} duration={800}>
              <Button className="font-medium transition-all hover:text-purple-500">
               About
              </Button>
            </Link>
            
            </li>
            <li>
            <Link to="academics" smooth={true} duration={800}>
              <Button className="font-medium transition-all hover:text-purple-500">
               Academics
              </Button>
            </Link>
            
            </li>
            <li>
            <Link to="extras" smooth={true} duration={800}>
              <Button className="font-medium transition-all hover:text-purple-500">
               Extras
              </Button>
            </Link>
            
            </li>
            <li>
            <Link to="conatct" smooth={true} duration={800}>
              <Button className="font-medium transition-all hover:text-purple-500">
               Contact
              </Button>
            </Link>
            
            </li>
      {/* Add more navigation items here */}
          </ul>
        </div>
      </nav>

        <div className="bg-black text-white font-reg font-def text-customFSizeXL">
        
          <SlidingText />
        </div>
      </div>


      <Element name="aboutSection">
      <div className="bg-grey min-h-screen flex justify-center items-center">
        <div className="flex-grow" />
        {/* Image centered vertically and slightly to the right */}
        <div style={{ marginLeft: '200px' }}> {/* Adjust the margin to control alignment */}
          <img
            src="/images/Srikriti.jpg" // Replace with your image URL
            alt="Image Description"
            className="w-5/6 h-auto"
          />
        </div>

        {/* Content for the second screen */}
        <div style={{ marginRight: '350px',width: '100%' }} className="flex-grow w-2/3"> 
          <div className=" font-reg" style={{ color: '#918EF4',fontSize: `${1.2}rem` }}>
            <h1>About</h1>
          </div>
          <div className=" text-white font-def  text-customFSizeM">
            <h1  >A Little Bit About Me</h1>
          </div>
          <p className="text-white"> Hi! I'm Srikriti, I'm passionate about math and computer science even though I kinda complain a lot. I've done highschool compsci classes for 3 years and I am dedicated to learn more about the field of computer science because I dont know what I want to do yet. Usually when I'm not around my conmputer, I'm bothering my friends or dancing. Apart from complaining and bothering people I am very dedicated to compsci and won't stop on a project until its the best it can possibly be. Like this website </p>
          {/* Add your content here */}
        </div>
      </div>
  </Element>
  <Element name="academics">
  <div className="bg-black min-h-screen flex flex-col justify-center items-center">
        <h1>hh</h1>

        <div className="font-reg items-center" style={{ color: '#918EF4', fontSize: `${1.2}rem` }}>
          <h1>Academics</h1>
        </div>
  
          <div className=" text-white items-center font-def text-customFSizeM">
            <h1  >Here are some of my academic credentials that are relevant to CS</h1>
          </div>
          {/* Add your content here */}
        
       
        <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
      </div>
  </Element>


    
  <Element name="extras">
      <div className="bg-grey justify-center flex flex-col justify-center items-center">
        






          <div className="font-reg items-center" style={{ color: '#1c1c1c', fontSize: `${2}rem` }}>
            <h1>Extras</h1>
          </div>
          <div className="font-reg items-center ml-10" style={{ color: '#918EF4', fontSize: `${1.2}rem` }}>
            <h1>Extras</h1>
          </div>
  
          <div className=" text-white items-center font-def text-customFSizeM ml-10">
            <h1>Some of my Hobbies</h1>
          </div>

          <div className="font-reg items-center ml-10" style={{ color: '#928ca1', fontSize: `${1.2}rem` }}>
            <h1>Apart from school, these are some of my hobbies I do on my own time</h1>
          </div>

          <div className="font-reg items-center ml-10" style={{ color: '#1c1c1c', fontSize: `${2}rem` }}>
            <h1>Extras</h1>
          </div>

         
         
          <div className="image-container">
        <div className="row">
        <div className="flex">
          <LayoutCards
            imageSource="./images/GWC.png"
            title="Girls who Code"
            description="During the summer, I volunteered as a mentor at Girls Who Code, an organization helping younger girls who code. I was a TA for a program that taught younger girls (5th to 8th grade) to code in Python. It was really fun, and the GWC members were so friendly. It was really nice to empower youger girls to take cs because we need representation!"
          />
          <LayoutCards
            imageSource="./images/hennaArt2.png"
            title="Art Fundraiser"
            description="Something about me is that I love doing henna on myself and other people. So me and my friend are going to run a henna and art booth in a temple nearby during Navaratri. Pull up please! "
            buttonText="Go to website"
            link =" https://hennaart--mutsri07.repl.co/"
          />
        </div>
        <div className="image-container">
        <div className="flex">
          <LayoutCards
            imageSource="./images/kuchipudi.jpg"
            title="Kuchipudi"
            description="So I do this dance style called Kuchipudi which is on of the many traditional Indian dance styles. I've been doing it for 9 years and it's a really big part of my life. It is one of the few things that keep me sane because it is a something away from school. "
          />
          <LayoutCards
            imageSource="./images/coding4u.png"
            title="Coding4U"
            description="This summer me and a friend started a youtube channel dedicated to help younger kids learn basic python. We started it pretty recently and we hope to have some success in the future!"
            buttonText="Go to channel"
            link =" https://www.youtube.com/@coding_4you"
          />
        </div>
        </div>
        <div className="flex">
          <LayoutCards
            imageSource="./images/badminton.jpg"
            title="Badminton"
            description="Another sport I do is badminton! Badminton is literally so much fun because I can take out my rage on a birdie and it fulfills the competitive side in me. I'm so grateful to be on such a great badminton team in Conant:)"
          />
          <LayoutCards
            imageSource="./images/travel.jpg"
            title="Travel"
            description="I also love traveling! It is so nice to get away from schamburg during the winter because it's so cold. I love seeing new places and enjoying different cuisines. I'm incredibly grateful to go on some type of vacation every year and so far I've been to 17 different countries and I hope to get that number to 30 by the time I'm 30."
          />
        </div>
      </div>

          
      </div>

      </div>


      </Element>

      <Element name="contact">
      
        <div className="bg-black min-h-screen flex flex-col justify-center items-center">
          <h1>hh</h1>

          <div className="font-reg items-center" style={{ color: '#918EF4', fontSize: `${1.2}rem` }}>
            <h1>Contact</h1>
          </div>
  
          <div className=" text-white items-center font-def text-customFSizeM">
            <h1 >Lets work together!</h1>
          </div>
          <div className="font-reg items-center" style={{ color: '#928ca1', fontSize: `${1.2}rem` }}>
            <h1>You can get a hold of me via email</h1>
          </div>
          <div className=" text-black items-center font-def text-customFSizeM">
            <h1 >Lets work together!</h1>
          </div>
          <Contact/>

      </div>
      </Element>

    </div>
    
  );
}

export default App;
