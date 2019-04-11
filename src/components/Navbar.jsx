import React from 'react';
import NavSection from './NavSection.jsx';
import Data from './Data.jsx';

class Navbar extends React.Component{

  render(){
  
  return(

  <div>
  <NavSection nav={Data} />
  
  </div>
  )
  }
  }

export default Navbar;