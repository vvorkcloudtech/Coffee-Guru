import React from 'react';


const ProductsSection = (props)=> {


var res= props.products.map((obj, index)=>{
    return <div key={index}>
    
 <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">{obj.products.headinguper}</span>
                <span className="section-heading-lower">{obj.products.headinglower}</span>
              </h2>
            </div>
          </div>
          <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={obj.products.fig.url1} alt="" />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">{obj.products.para1}</p><br/>
              <button className="click">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
              <span className="section-heading-upper">{obj.products.headinguper}</span>
                <span className="section-heading-lower">{obj.products.headinglower}</span>
              </h2>
            </div>
          </div>
          <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={obj.products.fig.url2} alt="" />
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">{obj.products.para2}</p><br/>
              <button className="click">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
              <span className="section-heading-upper">{obj.products.headinguper}</span>
                <span className="section-heading-lower">{obj.products.headinglower}</span>
              </h2>
            </div>
          </div>
          <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={obj.products.fig.url3} alt="" />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">{obj.products.para3}</p><br/>
              <button className="click">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>

</div>
})

return(
    <div>
        {res}
    </div>
)
}

export default ProductsSection;