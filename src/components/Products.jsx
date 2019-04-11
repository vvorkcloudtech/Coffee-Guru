import React from 'react';
import ProductSection from './ProductSection.jsx';
import Data from './Data.jsx';

class Products extends React.Component{

  render(){
  
  return(

  <div>
  <ProductSection products={Data} />
  
  </div>
  )
  }
  }

export default Products;