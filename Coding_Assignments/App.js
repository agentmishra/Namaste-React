// Render an <h1 class="namaste">Namaste React using React</h1> on the page inside the given root.

import React from "react";
import {createRoot} from "react-dom/client";




// Rendering in the root
const root = document.querySelector("#root");

const reactElement = React.createElement("h1", {className: "namaste"}, "Namaste React using React");
createRoot(root).render(reactElement)


// Nested React Elements 
const paragraphElement = React.createElement("p", {className:"text"},  "Chapter 02-Igniting our App");
const container = React.createElement("div", {className:"container"}, [reactElement, paragraphElement])
createRoot(root).render(container);


