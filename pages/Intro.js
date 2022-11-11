import React, { useContext, useState } from 'react';
import './Intro.css'
import intro from '../assets/intro.jpg';
import { Link } from "react-router-dom";
import { diffContext, userContext } from '../MyContext';

export default function Intro() {

    const [err, setErr] = useState("");
    const [ready, setReady] = useState(false);

    


    const { user, setUser } = useContext(userContext);
    const { diff, setDiff } = useContext(diffContext);

    function Check() {
        if (user === "") {
            setErr("Please Set your Nickname !")
        } else {
            if (diff === "") {
                setErr(" Please choose Difficulty !")
            } else {
                setErr("");
                setReady(true);
                console.log(diff)
                window.localStorage.setItem('USER_NAME', JSON.stringify(user));
                window.localStorage.setItem('DIFFICULTY', JSON.stringify(diff));
            }
        }

    }

    return (
        <div>
            <div className='intro'>
                <h3 className='intro_desc'>You think your self good in football? Accept the</h3><h3 className='high'> competition</h3>
            </div>
            <div className='intro_body'>
                <div className='intro_wall'>
                    <div className='wall'>
                        <img src={intro} alt="intro" />
                    </div>
                </div>
                <div className='intro_start'>
                    <div className='label_cont'>
                        <h3 className='label'>Enter your nickname :</h3>
                    </div>
                    <div className="field">
                        <input
                            id='nick'
                            type="text"
                            placeholder='nickname...'
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
                    <div className='label_cont'>
                        <h3 className='label'>Choose the difficulty :</h3>
                    </div>
                    <div className="field">
                        <select
                            className='input_select'
                            onChange={(e) => setDiff(e.target.value)}
                        >
                            <option hidden>Select your option</option>
                            <option value={"Easy"}>Easy</option>
                            <option value={"Medium"}>Medium</option>
                            <option value={"Hard"}>Hard</option>
                        </select>
                    </div>

                    {ready ? (
                        <div className='start_div'>
                            <Link to="/home"><button className='start_but'>Lets go !</button></Link>
                        </div>
                    ) : (
                        <div className='start_div'>
                            <Link ><button className='check_but' onClick={() => Check()}>Ready</button></Link>
                            <p className='error'>{err}</p>
                        </div>

                    )}

                </div>
            </div >
        </div >
    )
}
