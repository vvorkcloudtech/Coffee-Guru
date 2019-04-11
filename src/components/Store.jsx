import React from 'react';
import StoreSection from './StoreSection.jsx';
import Data from './Data.jsx';

class Store extends React.Component{

  render(){
  
  return(

  <div>
  <StoreSection store={Data} />
  
  </div>
  )
  }
  }

export default Store;