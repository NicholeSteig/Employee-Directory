import React from "react";

function NameBtn(props) {
    return (
        <button onClick={props.onClick} className={`name-btn`} {...props}>Sort by Name</button>
    );
}

export default NameBtn;