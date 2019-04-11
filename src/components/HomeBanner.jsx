import React from 'react';


const Banner = (props)=> {
var res= props.section1.map((obj, index)=>{

    return <div key={index}>
 <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={obj.section1.fig1.url} alt="" />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper headinguper">{obj.section1.headinguper}</span>
              <span className="section-heading-lower">{obj.section1.headinglower}</span>
            </h2>
            <p className="mb-3">
            {obj.section1.para1}
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="#"> {obj.section1.btn1}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">{obj.section1.headinguper1}</span>
                <span className="section-heading-lower">{obj.section1.headinglower1}</span>
              </h2>
              <p className="mb-0">{obj.section1.para1}</p>
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

export default Banner;