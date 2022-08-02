import React from "react";
import reactDOM from "react-dom";
import App from './components/App.jsx';

// Render our app to the dom mounted to the element with id of root inside our public/index.html file.
reactDOM.render(<App />, document.getElementById("root"));