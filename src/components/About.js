import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
        if(props.user.bio){
          <p>{props.user.bio}</p>
        }
        else{ null } 
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
       <Links props={props.user}/>
    </div>
  );
}

export default About;
