import styled from "styled-components";
import {motion} from "framer-motion";

export const ProjectsContainer = styled.div`
    display:flex;
    marginTop: 2rem;

`

export const Card = styled(motion.div)`
    height: 470px;
    width: 50%;
    margin: 1rem;
    background: #343444;
    border-radius:20px;
    margin-bottom:40px;
    overflow:hidden;
    cursor:pointer;
    transition: all .3s ease-in-out;

`

export const CardMedia = styled(motion.div)`
    height: auto;
    margin: 15px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;

`