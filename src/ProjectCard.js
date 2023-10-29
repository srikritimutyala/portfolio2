import { Card, CardMedia } from './ProjectCardStyle';
import React,{ useState } from 'react';
import { ProjectData } from './ProjectData';

const ProjectCard = ({data}) => {
    return(
        <Card>
            <CardMedia>
                <img src={data?.projectImhage} alt="hello"/>
            </CardMedia>

        </Card>
    )
}

export default ProjectCard;
