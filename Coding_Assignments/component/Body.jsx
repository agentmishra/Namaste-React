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