import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll',boarder:'1px solid black',height:'750px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;