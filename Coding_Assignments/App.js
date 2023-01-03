import React from "react";
import {createRoot} from "react-dom/client";
import logoImage from './img/logo.jpg';
import userIcon from "./img/userIcon.png"


    // Rendering in the root
const root = document.querySelector("#root");


const HeaderComponent = function() {
    return(
            <>
                <header>
                    <a href="#" className="logo-wrap">
                    <img src={logoImage} alt="" height="70" width="70" />
                    </a>

                    <div className="search">
                        <form action="#">
                            <input type="text" placeholder=" Search Courses" name="search"/>
                            <button>
                                <i className="fa fa-search"  /> 
                            </button>       
                        </form>
                    </div>

                    <span className="btn-wrap">
                        <a href="#" className="logo-wrap">
                            <img className="avatar avata-round" src={userIcon} alt="" height="50" width="50" /> 
                        </a>
                        
                    </span>
                    
                </header>
            </>
    )
}



    



createRoot(root).render(<HeaderComponent/>);