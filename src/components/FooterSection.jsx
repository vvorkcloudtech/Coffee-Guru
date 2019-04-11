import React from 'react';


const FooterSection = (props)=> {
var res= props.footer.map((obj, index)=>{

    return <div key={index}>
 <footer className="footer text-faded text-center py-5">
      <div className="container">
        <p className="m-0 small">{obj.footer.para}</p>
      </div>
    </footer>

</div>
})

return(
    <div>
        {res}
    </div>
)
}

export default FooterSection;