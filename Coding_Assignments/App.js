// Render an <h1 class="namaste">Namaste React using React</h1> on the page inside the given root.


// Rendering in the root
const root = ReactDOM.createRoot(document.querySelector("#root"));
const reactElement = React.createElement("h1", {className: "namaste"}, "Namaste React using React");
root.render(reactElement)


// Nested React Elements 
const paragraphElement = React.createElement("p", {className:"text"},  "Chapter 01-Inception");
const container = React.createElement("div", {className:"container"}, [reactElement, paragraphElement])
root.render(container);


