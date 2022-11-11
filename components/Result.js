import React from 'react';
import './Result.css';

export default function({score}) {
    return (
        <div className='div_container'>
            <h1>RESULT</h1>
            <p className='score'>{score}</p>
            {(score >2) ?(
                <p>Good job</p>
            ):(
                <p>Better for you to play basket</p>
            )}
            <button className='back_but'>Back Home</button>
        </div>
    )
}
