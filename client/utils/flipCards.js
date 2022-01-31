import React from "react";
import FlipCard from "../components/FlipCard";
import randomArray from "./randomArray";

export let cardsArray = [];
let selectedImgs = [];
let selectedCards = [];

function checkMatch() {
    setTimeout(() => {
        if (selectedImgs.length === 2) {
            if (selectedImgs[0] !== selectedImgs[1]) {
                selectedCards[0].offsetParent.style.transform = ("rotateY(0deg)");
                selectedCards[1].offsetParent.style.transform = ("rotateY(0deg)");
            }
            else {
                selectedCards[0].nextSibling.style.transform = ("rotateY(0deg)");
                selectedCards[1].nextSibling.style.transform = ("rotateY(0deg)");
            }
            selectedImgs = [];
            selectedCards = [];
        }
    }, 850)
}

function handleClickCard(event) {
    event.target.offsetParent.style.transform = ("rotateY(180deg)");
    selectedCards.push(event.target);
    selectedImgs.push(event.target.nextSibling.lastChild.currentSrc);
    checkMatch();
}

export default function createFlipCards(quantity, classCard, array) {

    let imgsArray = [...array];
    let imgsCopy = [];

    for (let i = 0, j = 0; i < quantity; i++, j++) {
        const randomNumber = Math.floor(Math.random() * imgsArray.length);
        const randomSrc = imgsArray[randomNumber];

        if (i < quantity / 2) {
            cardsArray.push(
                <FlipCard key={i} id={i}
                    class={classCard} clickCard={handleClickCard}
                    source={randomSrc}
                    imgClass={`img-resp ${i}`}
                />
            )
            imgsCopy.push(randomSrc);
            imgsArray = imgsArray.filter((item) => item !== randomSrc);
        }
        else {
            cardsArray.push(
                <FlipCard key={i} id={i}
                    class={classCard} clickCard={handleClickCard}
                    source={imgsCopy[quantity - i - 1]}
                    imgClass={`img-resp ${i}`}
                />
            )
        }
    }
    randomArray(cardsArray);
}
