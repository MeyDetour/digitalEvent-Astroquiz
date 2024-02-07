import {GlobalConstants} from "../../../Common/Global constants";
import './../gameDisplay.css'
import {IntroInterface} from "../../../Interface/IntroInterface";

function Outro(introInterface: IntroInterface) {
    return (
        <img onClick={introInterface.onClick} className="introOutro outro" src={GlobalConstants.urlFile + "/gameDisplay/outro.png"} alt="Image De fermeture"/>
    )
}

export default Outro;