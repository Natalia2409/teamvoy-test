import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import Card from "./Card";
import BigCard from "./BigCard";
import { Context } from "../Context";

function Main() {

    const [view, setView] = useState(false)
    const [count, setCount] = useState(12);
    const [weight, setWeight] = useState();
    const [numberOfPok, setNumberOfPok] = useState();
    const [moves, setMoves] = useState();
    const [height, setHeight] = useState();
    const [type, setType] = useState([]);
    const [name, setName] = useState([]);

    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.allPokemons.allPokemons);
    const arrayOfAll = useSelector(state => state.arrayOfAll.arrayOfAll);

    useEffect(() => {
        dispatch(getAllPokemons(count));
    }, [count]);

    const loadMore = () => {
        setCount((prev) => prev + 12)
    };

    const gettingList = (e) => {
        setView(true);
        const data = arrayOfAll[e.currentTarget.id - 1];
        setWeight((prev) => prev = data["weight"]);
        const id = e.currentTarget.id;
        setNumberOfPok((prev) => prev = id);
        const move = data["moves"].length;
        setMoves((prev) => prev = move);
        const heigh = data["height"];
        setHeight((prev) => prev = heigh);
        const type = data["types"].map(item => item["type"]["name"]);
        setType((prev) => prev = type);
        let name = data["name"];
        name = name.substr(0, 1).toUpperCase() + name.slice(1);
        setName((prev) => prev = name);
    }

    const hiddenButton = () => {
        setView(false);
    }

    return (
        <Context.Provider value={{
            gettingList
        }}>
            <div className="page">
                <div className="main">
                    {pokemons.map((item) => <Card {...item} />)}
                    <button onClick={loadMore} className="loadmore">Load More</button>
                </div>
                <div className="big">
                    {view ? (
                            <div className="load">
                                <BigCard weight={weight} name={name} type={type} numberOfPok={numberOfPok} moves={moves} height={height}/>
                                <button onClick={hiddenButton} className="loadmore">Hidden</button>
                            </div>
                    ) : ""}
                </div>
            </div>
        </Context.Provider>
    )
}

export default Main;
