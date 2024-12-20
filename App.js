import React from 'react';
import ReactDOM from 'react-dom/client';

const reactHelloWorld = React.createElement("div", null, React.createElement("h2", null, "Hello World using React"),
    React.createElement("p", null, "This is react code"));

const htmlRoot = document.getElementById("root");
const rootReact = ReactDOM.createRoot(htmlRoot);

rootReact.render(reactHelloWorld);
