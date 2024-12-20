import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
	return <h1>Hello World (js)</h1>;
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));