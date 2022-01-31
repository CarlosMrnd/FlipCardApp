import createFlipCards from "./flipCards";
import { imgAnimalsSrc } from "../utils/imgAnRoutes";
import { imgFoodsSrc } from "../utils/imgFoRoutes";
import { imgGamesSrc } from "../utils/imgGaRoutes";

export default function generateLayout(level, topic) {
    let imgsTopic = "";

    topic === "animals" ? imgsTopic = imgAnimalsSrc :
        topic === "food" ? imgsTopic = imgFoodsSrc :
            topic === "games" ? imgsTopic = imgGamesSrc :
                console.log("topic invalido");

    level === "easy" ? createFlipCards(12, "no-match", imgsTopic) :
        level === "medium" ? createFlipCards(20, "no-match", imgsTopic) :
            level === "hard" ? createFlipCards(24, "no-match", imgsTopic) :
                console.log("level invalido");

}