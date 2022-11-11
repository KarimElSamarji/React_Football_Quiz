import React, { useState } from 'react';
import './Home.css';
import data from '../data.json'
import { useEffect} from 'react';
import Result from '../components/Result';


function Home() {

    

    const [curentques, setCurentques] = useState(0);
    const [butTrue, setButTrue] = useState(false);
    const [butFalse, setButFalse] = useState(false);
    const [butCheck, SetButCheck] = useState(10);
    const [seconds, setSeconds] = useState(5);
    const [finish, setFinish] = useState(false);
    const [score, setScore] = useState(0);

    const localUser = JSON.parse(window.localStorage.getItem('USER_NAME'));
    const localDiff = JSON.parse(window.localStorage.getItem('DIFFICULTY'));


    const ques = {
        Easy: 1,
        Medium: 4,
        Hard: 15
    }

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            if (seconds === 0) {
                setSeconds(5);
                NextQuestion();
            } else {
                setSeconds(seconds => seconds - 1);
            }

        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);






    const Submit = (isCorrect) => {
        if (isCorrect) {
            console.log("Its coorect");
            setButTrue(true);
            setScore(score + 1);
        }
        else {
            setButFalse(true);
        }
        setTimeout(NextQuestion, 1000);
    }

    const NextQuestion = () => {
        SetButCheck(1000);
        setButTrue(false);
        setButFalse(false);
        setSeconds(5);
        console.log("user" + localUser)
        if (curentques === ques[localDiff] - 1) {
            setFinish(true);
        } else {
            setCurentques(curentques + 1);
        }
    }



    return (
        <div className='back'>
            {finish ? (
                <Result score={score} />
            ) : (
                <div>
                    <div className='container'>
                        <div className='question-bar'>
                            {
                                data[curentques].diffi === localDiff ?
                                    <p>{data[curentques].question}</p> : setCurentques(curentques + 1)
                            }
                        </div>
                    </div>


                    <div className='awnsers'>
                        {data[curentques].options.map((option) => {
                            return (
                                <button
                                    key={option.id}
                                    className={butCheck !== option.id ? "anwser" : butTrue ? "true_ans" : butFalse ? "false_ans" : ""}
                                    onClick={() => {
                                        Submit(option.isCorrect)
                                        SetButCheck(option.id)
                                    }
                                    }>
                                    <p className='ans_label' key={option.id}>{option.text}</p>
                                </button>
                            );
                        })}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h2 className='timer'>{seconds}</h2>

                        <h4>{localUser}</h4>
                    </div>
                </div>
            )
            }
        </div>
    )
}
export default Home;