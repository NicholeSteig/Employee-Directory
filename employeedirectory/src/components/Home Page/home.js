import React from "react";
import NameBtn from "../Buttons/name-button";
import TitleBtn from "../Buttons/title-button";
// import Card from "./Card";

function Home() {
    return(
        <div>
            <h1>Employee Directory</h1>
            <NameBtn></NameBtn>
            <TitleBtn></TitleBtn>            
        </div>
    )
}

export default Home;