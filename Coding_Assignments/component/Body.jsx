import React from "react";
import RestaurantList from "./RestaurantList";

const searchbar = (
    <div className="search">
        <form action="#">
            <input type="text" placeholder="What are you looking for 🔎🧐🕵" name="search"/>
            <button className="btn">Search</button>      
        </form>
    </div>
)




// const Card = (props) => {
//     const {children,resturant, cloudinaryImageId} = props;
   
//     return (
//         <div className="item">
//                     {/* <img src="https://source.unsplash.com/featured/400x300/?food" alt="" /> */}
//                     <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           cloudinaryImageId
//         } />


//                     <div className="desc">
//                         <span>{resturant.data?.costForTwoString ?? "₹100 FOR TWO"}</span>
//                         <h3>{resturant.data?.locality}</h3>
//                          <p>{resturant.data?.address.substring(0,12) ?? "In your Kitchen"}</p>
//                         <button>Add to Cart</button>
//                     </div>

//             </div>
//     )
// }



export default function Body() {
        return(
            <>  
            
                <div className="container">
                    {searchbar}
           
                    <div className="main">
                        <RestaurantList />

                    </div>

                </div>    
            </>
        )
}