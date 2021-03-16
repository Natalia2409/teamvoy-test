import React from "react";

function BigCard({ weight, numberOfPok, moves, height, type, name }) {

    const url = `https://pokeres.bastionbot.org/images/pokemon/${numberOfPok}.png`;

    const num = (numberOfPok.length === 3) ? `${numberOfPok}`
            : (numberOfPok.length === 2) ? `0${numberOfPok}`
            : `00${numberOfPok}`

    return (
        <div class="card big-card">
            <img src={url} class="card-img-top" alt="image" />
            <div class="card-body">
                <h5 class="card-title">{name} {num}</h5>
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <th scope="row">Type</th>
                            <td>
                                {type ? type.map(item => <div>{item}</div>) : ""}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Height</th>
                            <td>{height}</td>
                        </tr>
                        <tr>
                            <th scope="row">Weight</th>
                            <td>{weight}</td>
                        </tr>
                        <tr>
                            <th scope="row">Total Moves</th>
                            <td>{moves}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BigCard;
