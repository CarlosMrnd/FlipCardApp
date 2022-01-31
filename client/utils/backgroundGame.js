import animalBg from "../images/Backgrounds/Fondo-animal.svg";
import foodBg from "../images/Backgrounds/Fondo-food.svg";
import gameBg from "../images/Backgrounds/Fondo-game.svg";

export default function bgGame(topic) {
    if (topic === "animals") {
        return animalBg;
    }
    else if (topic === "food") {
        return foodBg;
    }
    else if (topic === "games") {
        return gameBg;
    }
}