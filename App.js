import React from 'react';
import ReactDOM from 'react-dom/client';

var mainRoot = document.getElementById("root");
var mainDom = ReactDOM.createRoot(mainRoot);

function HelloWorld() {
  return <h1>Hello World!</h1>;
}

mainDom.render(<HelloWorld/>)
