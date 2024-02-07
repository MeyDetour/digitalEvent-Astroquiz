import {GlobalConstants} from "../../../Common/Global constants";

import './../gameDisplay.css'
import {IntroInterface} from "../../../Interface/IntroInterface";
function Intro(introInterface:IntroInterface){
    return(
        <img onClick={introInterface.onClick}  className='introOutro' src={GlobalConstants.urlFile+"/gameDisplay/intro2.png"} alt="Image D'ouverture"/>
    )
}
export default Intro