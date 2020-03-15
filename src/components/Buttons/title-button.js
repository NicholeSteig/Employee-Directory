import React from "react";

function TitleBtn(props) {
    return (
        <button onClick={props.onClick} className={`title-btn`} {...props}>Sort by Title</button>
    );
}

export default TitleBtn;