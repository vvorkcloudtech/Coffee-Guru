import React from 'react';
import Banner from './HomeBanner.jsx';
import Data from './Data.jsx';

class Home extends React.Component{

  render(){
  
  return(

  <div>
  <Banner section1={Data} />
  
  </div>
  )
  }
  }

export default Home;