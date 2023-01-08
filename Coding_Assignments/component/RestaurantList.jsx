import React from "react";
import { restaurantList } from "../data/restaurant";
import Restaurant from "./Restaurant";


export default function RestaurantList() {
    return (
        <>
                  <div className="container-icon">
                                   
                                   {
                                       restaurantList.map(restaurant => {
                                           return <Restaurant restaurant={restaurant.data} key={restaurant.data.id}  />
                                       })
                                   }
       
                               </div>
        </> 
    )
}