import React from "react";

function GenerateBtn(props) {
    return (
        <button onClick={props.onClick} className={`generate-btn`} {...props}>Sort by Title</button>
    );
}

export default GenerateBtn;