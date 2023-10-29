import React from 'react';
import { useSpring, animated } from 'react-spring';
import SocialLinks from './SocialLinks';
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const SlidingText = () => {
  const slideAnimation = useSpring({
    from: { marginLeft: '-100%', marginTop: '30vh' },
    to: { marginLeft: '-40%', marginTop: '30vh' },
    config: { duration: 1000 },
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to:{opacity:1},
    config: { duration: 2000 },
  });

  return (
    <div className="h-screen flex items-center justify-center">
      <animated.div style={slideAnimation}>
        <div className="bg-black font-reg" style={{ color: '#918EF4',fontSize: `${1.5}rem` }}>
          <h1>Hello! I am...</h1>
        </div>
        <div className="bg-black text-white font-def text-customFSizeXL">
          <h1  >Srikriti Mutyala</h1>
        </div>
        <div className="bg-black  font-reg" style={{ color: '#928ca1',fontSize: `${1.25}rem` }}>
          <h1>A highschool junior who made this website :D</h1>
        </div>
        <div className="flex">
          <a href="https://www.linkedin.com/in/srikriti-mutyala-961528279/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} style={{ color: '#ffffff', marginTop: '10px' }} />
          </a>
          <a href="https://github.com/srikritimutyala" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} style={{ color: '#ffffff', marginTop: '10px', marginLeft: '20px' }} />
          </a>
        </div>
      </animated.div>


      <animated.img
        src="\images\computer.png"
        alt="Image Description"
        className="w-1/4 h-auto"
        style={{
          ...fadeIn,
          position: 'absolute',
          top: '15%', // Adjust as needed for vertical positioning
          right: 40,
          height: '450px',
        }}
      />
       


    </div>
  );
};

export default SlidingText;