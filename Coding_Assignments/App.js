import React from "react";
import {createRoot} from "react-dom/client";


    // Rendering in the root
const root = document.querySelector("#root");

const paragraph = (
        <p>This is a paragraph elementt</p>
    )

const ParagraphComponent = function() {
        return(
            <p className="para">This is a paragraph Component</p>
        )
    }


const TitleComponent = function() {
            return (
                <div>
                    <ParagraphComponent/> 
                    <h1 className="title" key="h1">This is a heading 1</h1>
                    <h2 className="title" key="h2">This is a heading 2</h2>
                    <h3 className="title" key="h3">This is a heading 3</h3>
                    
                    {paragraph} 
                </div>
            )
    }


    



    createRoot(root).render(<TitleComponent/>);