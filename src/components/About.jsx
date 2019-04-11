import React from 'react';
import AboutSection from './AboutSection.jsx';
import Data from './Data.jsx';

class About extends React.Component{

  render(){
  
  return(

  <div>
  <AboutSection about={Data} />
  
  </div>
  )
  }
  }

export default About;