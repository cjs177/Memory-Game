import React, { useEffect, useState } from 'react';
import Granny from '../images/Granny.jpg';
import Bugs from '../images/Bugs.png';
import Daffy from '../images/Daffy.png';
import Foghorn from '../images/Foghorn.png';
import Fudd from '../images/Fudd.png';
import Marvin from '../images/Marvin.png';
import Porky from '../images/Porky.png';
import Roadrunner from '../images/Roadrunner.jpg';
import Sam from '../images/Sam.png';
import Sylvester from '../images/Sylvester.png';
import Taz from '../images/Taz.png';
import Tweety from '../images/Tweety.png';
import '../Style.css';

const Game = () => {

    let imageList = [
        {
            src: Granny,
            title: "Granny"
        },
        {
            src: Bugs,
            title: "Bugs Bunny"
        },
        {
            src: Daffy,
            title: "Daffy Duck"
        },
        {
            src: Foghorn,
            title: "Foghorn Leghorn"
        },
        {
            src: Fudd,
            title: "Elmer Fudd"
        },
        {
            src: Marvin,
            title: "Marvin The Martian"
        },
        {
            src: Porky,
            title: "Porky Pig"
        },
        {
            src: Roadrunner,
            title: "Roadrunner"
        },
        {
            src: Sam,
            title: "Yosemite Sam"
        },
        {
            src: Sylvester,
            title: "Sylvester The Cat"
        },
        {
            src: Taz,
            title: "Tazmanian Devil"
        },
        {
            src: Tweety,
            title: "Tweety Bird"
        }
    ];

    const [pics, setPics] = useState(imageList);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [usedArray, setUsedArray] = useState([]);

    const randomizeCards = (newPics) => {
        for (let i = newPics.length-1; i > 0; i--) {
            let randomPic = Math.floor(Math.random() * i);
            [newPics[randomPic], newPics[i]] = [newPics[i], newPics[randomPic]];
        }

    };

    useEffect(() => {
        const newPics = [...imageList];
        randomizeCards(newPics);
        setPics(newPics);
    }, [score, highScore]);

    const gameState = (e) => {
        e.preventDefault();
        if(!usedArray.includes(e.target.src)){
            setScore(score + 1);
            e.target.className = "clicked";
            setUsedArray(oldArray => [...oldArray, e.target.src]);
            console.log(usedArray);
        }
        else {
            if(score > highScore){
                setHighScore(score);
            }
            setUsedArray([]);
            setScore(0);
            setPics([]);
        }
    };

    return(
        <div className="scoreContainer">
            <h1>Looney Tunes Memory Game</h1>
            <div>
                <p>Score:</p>
                {score}
                <p>High Score:</p>
                {highScore}
                </div>
            <div className="gameContainer">
                {pics.map((image) => (
                   <div className="selectionContainer"><img src={image.src} key={image.title} onClick={gameState} />
                   <br/>
                   {image.title}
                   </div>
                ))}
        </div>
        </div>

    );

}

export default Game;