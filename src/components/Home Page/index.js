import React, { Component } from "react";
import NameBtn from "../Buttons/name-button";
import TitleBtn from "../Buttons/title-button";
import GenerateBtn from "../Buttons/generate-button"
import API from "../../utils/API";
// import Card from "./Card";

class Home extends Component {
    state = {
        sort: ""
    };

    componentDidMount() {
        //generate cards
    }

    handleBtnClick = event => {
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        const newState = { ...this.state };

        if (btnType === "name-btn") {
            //sort by name
            newState.sort = "name";
        } else if (btnType === "title-button") {
            //sort by title
            newState.sort = "title";
        }
        this.setState(newState);
    }

    generateCards() {
        API.getUser()
        .then
    }


    render() {
        <div>
            <h1>Employee Directory</h1>
            <NameBtn></NameBtn> <TitleBtn></TitleBtn>
        </div>
    };
}

export default Home;