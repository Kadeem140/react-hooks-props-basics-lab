import React from "react";

function Links(props){
    console.log(props,"Links props object")
    return(
        <div>
            <h3>"Links"</h3>
            <a href={props.links}>{props.user.links}</a>
            <a href={props.links}>{props.links}</a>
        </div>
    )
}

export default Links;