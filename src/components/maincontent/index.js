import React from "react";
import logo from "./greyyy.png"
export default function MainContent() {
    return (
        // div  parent, everything inside children
        <div>
            <h1 className="facts">Fun Facts About React</h1>
            <ul className="orderedli">
                <li>It's a popular library</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
                <li>Its maintianed by Facebook</li>
                <li>Powers thousands of apps </li>
                <li>React Has a Strong Community </li>
                <li>It is written in JavaScript, not TypeScript. </li>
                <li>Virtual DOM is Faster Than Real DOM </li>
            </ul>
            <img src={logo} alt="Logo" className="greylogo"></img>
        </div>
    )
}