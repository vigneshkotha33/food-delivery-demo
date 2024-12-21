import React from "react";
import ReactDOM from "react-dom/client";

//Rendering with Js DOM
const rootElement = document.getElementById("js");
rootElement.innerHTML = `<h2>Hello World with JavaScript</h2>`;

//Rendering with React
const mainRoot = document.getElementById("root");
const mainDom = ReactDOM.createRoot(mainRoot);
const reactElement = React.createElement("div", null,
       React.createElement("h3", null, "Hello World with React"),
       React.createElement("p", null, "This is nested element"));

mainDom.render(reactElement); 
