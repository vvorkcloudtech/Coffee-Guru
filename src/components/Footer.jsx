import React from 'react';
import FooterSection from './FooterSection.jsx';
import Data from './Data.jsx';

class Footer extends React.Component{

  render(){
  
  return(

  <div>
  <FooterSection footer={Data} />
  
  </div>
  )
  }
  }

export default Footer;