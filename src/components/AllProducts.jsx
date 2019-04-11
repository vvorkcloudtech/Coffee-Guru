import React from 'react';


const AllProducts = (props)=> {
var res= props.AllProducts.map((obj, index)=>{

    return <div key={index}>
    
   

</div>
})

return(
    <div>
        {res}
    </div>
)
}

export default AllProducts;