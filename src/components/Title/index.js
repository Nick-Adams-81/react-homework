import React from "react";
import "./style.css";

function Title(props) {
    return  <h1 class="display-4" className="title">{props.children}</h1>

    
}

export default Title;