import React from "react";

function Types({item}) {

    let bgColor = "";

    if (item === "grass") {
        bgColor = "#B4DCA3";
    } else if (item === "poison") {
        bgColor = "#B49EC0"
    } else if (item === "fire") {
        bgColor = "#F19A97"
    } else if (item === "electric") {
        bgColor = "#FFE28A"
    } else if (item === "bug") {
        bgColor = "#CC397B"
    } else if (item === "flying") {
        bgColor = "#F07427"
    } else if (item === "ground") {
        bgColor = "#F0EAD6"
    } else {
        bgColor = "#23FFF4"
    }

    return (
        <div className="type" style={{backgroundColor: bgColor}}>
            {item}
        </div>
    )
}

export default Types;
