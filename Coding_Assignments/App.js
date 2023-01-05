import React from "react";
import {createRoot} from "react-dom/client";
import logoImage from './img/logo.jpg';
import userIcon from "./img/userIcon.png"




const paragraph = (
    <p>This is a paragraph element</p>
)


const TitleComponent = function() {
        return (
            <>  
                
                <h1 className="title" key="h1">This is a heading 1</h1>
                 <hr/>
                <h2 className="title" key="h2">This is a heading 2</h2>
                <hr/>
                <h3 className="title" key="h3">This is a heading 3</h3>
                <hr/>
                {paragraph}
            </>
        )
}


const searchbar = (
    <div className="search">
        <form action="#">
            <input type="text" placeholder="What are you looking for 🔎🧐🕵" name="search"/>
            <button className="btn">Search</button>      
        </form>
    </div>
)

const UserIconComponent = function () {
    return (
        <span className="btn-wrap">
            <a href="#" className="logo-wrap">
                <img className="avatar avata-round" src={userIcon} alt="" height="50" width="50" /> 
            </a>
        </span>
    )
}


const HeaderComponent = function() {
    return(
            <>
                <header>
                    <a href="#" className="logo-wrap">
                      <img src={logoImage} alt="" height="70" width="70" />
                    </a>
                  
                  {searchbar}

                  <UserIconComponent/>
                    
                </header>

                <TitleComponent/>
            </>
    )
}



    

// Rendering in the root
const root = document.querySelector("#root");

createRoot(root).render(<HeaderComponent/>);