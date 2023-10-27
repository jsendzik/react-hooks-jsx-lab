import React from "react";
import { name, city } from "../data/data.js";

const myString = `${name} is a Web Developer from ${city}`
const divStyle = {
  color: "firebrick"
}

function Home() {
  // update the JSX being returned!
  return (<div id="home">
    <h1 style={divStyle}>{ myString }</h1>
  </div>)
}

export default Home;
