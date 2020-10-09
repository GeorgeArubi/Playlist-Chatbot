import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
        {
            text: "Recents",
            handler: props.actionProvider.handleRecents,
            id: 1,
        },
        {
            text: "In/Out of Love",
            handler: props.actionProvider.handleLove, 
            id: 2,
        },
        {
            text: "Driving Music", 
            handler: props.actionProvider.handleDriving, 
            id: 3,
        },
        {
            text: "Upbeat", 
            handler: props.actionProvider.handleBeats, 
            id: 4,
        },
        {
            text: "Surprise Me", 
            handler: props.actionProvider.handleSurprises, 
            id: 5,
        },
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