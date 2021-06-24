import React from 'react';
import PropTypes from 'prop-types';
import { StyledAbout } from './About.styled';
import { FaHeart } from 'react-icons/fa';

const About = ({
  about,
  device, 
  ...props 
}) => {

  return (
    <StyledAbout device={device} {...props}>
      <h1>{about.title}</h1>
      <hr></hr>
      <h3>Software <><FaHeart className='heart'/></> Engineer</h3>
      <div className='test-box'>
      <div className="box-section image-container">
        <img 
          src={about.image.source} 
          alt={about.image.title}
        />
      </div>

      <div className="info-grid">
        <div className="box-section grid-column">
          <div>
            <ul> 
              {about.description.map(element => 
                <li> <span> {element} </span> </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      </div>
      
    </StyledAbout>
  )
}

About.propTypes = {
  about: PropTypes.object.isRequired,
  device: PropTypes.object.isRequired,
}

export default About;