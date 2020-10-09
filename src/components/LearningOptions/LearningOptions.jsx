import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
        {
            text: "Recents",
            handler: props.actionProvider.handleJavascriptList,
            id: 1,
        },
        {text: "In/Out of Love", handler: () => {}, id: 2},
        {text: "Driving Music", handler: () => {}, id: 3},
        {text: "Upbeat", handler: () => {}, id: 4},
        {text: "Surprise Me", handler: () => {}, id: 5},
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className = "learning-option-button"
            key = {option.id}
            onClick = {option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className = "learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions