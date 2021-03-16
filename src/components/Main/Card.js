import React, {useContext } from "react";
import { useSelector } from "react-redux";
import Types from './Types';
import { Context } from "../Context";

function Card(item) {

    const {gettingList} = useContext(Context)

    const arrayOfAll = useSelector(state => state.arrayOfAll.arrayOfAll);

    const image = item.url.slice(34).slice(0, -1);

    const name = item.name.substr(0, 1).toUpperCase() + item.name.slice(1);

    const array = arrayOfAll[image - 1];

    const arrayOfTypes = array ? Object.entries(array).map(([key, value]) => {
        if (key === "types") {
            return value;
        }
    }) : "";

    const types = arrayOfTypes[16];

    const exactType = types ? types.map(item => {
        return (
            Object.entries(item).map(([key, value]) => {
                if (key === "type") {
                    return value;
                }
            }
        )
    )}) : "";

    const type = exactType ? exactType.map(item => item[1]["name"]) : "";

    const url = `https://pokeres.bastionbot.org/images/pokemon/${image}.png`;

    return (
        <div onClick={(e) => gettingList(e)} id={image} className="card card-style">
            <img src={url} className="card-img-top image" alt="image" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="line">
                    {type ? type.map(item => <Types item={item} />) : ""}
                </div>
            </div>
        </div>
    )
}

export default Card;
