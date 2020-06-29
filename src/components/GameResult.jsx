import React, { useState, useCallback } from 'react'

const GameResult = ({ data }) => {
    return <li>
        <a href={`https://www.nintendo.com${data.url}`}>
            <h1>{data.title}</h1>
            <img src={`https://www.nintendo.com${data.boxArt}`} />
        </a>
    </li>
}

export default GameResult