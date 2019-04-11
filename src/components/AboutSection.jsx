import React from 'react';



const AboutSection = (props)=> {
var res= props.about.map((obj, index)=>{

    return <div key={index}>
<section className="page-section about-heading">
      <div className="container">
        <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={obj.about.fig.url} alt="" />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">{obj.about.headinguper}</span>
                  <span className="section-heading-lower">{obj.about.headinglower}</span>
                </h2>
                <p>{obj.about.para1}></p>
                <p className="mb-0">{obj.about.para2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="page-section about-heading">
      <div className="container">
        
        <video className="img-fluid rounded about-heading-img mb-3 mb-lg-0" autoPlay="autoPlay" muted="muted" loop="loop" src={obj.about.fig.url1}></video>
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">{obj.about.headinguper}</span>
                  <span className="section-heading-lower">{obj.about.headinglower}</span>
                </h2>
                <p>{obj.about.para1}></p>
                <p className="mb-0">{obj.about.para2}</p>
              </div>
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

export default AboutSection;