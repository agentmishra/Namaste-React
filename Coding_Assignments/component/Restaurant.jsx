import React from "react";



export default function Restaurant(props) {
    const { restaurant} = props;
    const imageUrl = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_308,h_220,c_fill/${restaurant.cloudinaryImageId}`
    return(
        <> 
            <div className="item">
                    {/* <img src="https://source.unsplash.com/featured/400x300/?food" alt="" /> */}
                    <img src={imageUrl} />
        


                    <div className="desc">
                        <span>{restaurant.costForTwoString ?? "₹100 FOR TWO"}</span>
                        <h3>{restaurant.locality}</h3>
                         <p>{restaurant.address.substring(0,25) ?? "In your Kitchen"}</p>
                        <button>Add to Cart</button>
                    </div>

            </div>
        </>
    )
}