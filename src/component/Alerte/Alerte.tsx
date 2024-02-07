import Intro from "../GameDisplay/introOutro/intro";
import './alerte.css'
import ShowImage from "../GameDisplay/form/image/showImage";
import {GlobalConstants} from "../../Common/Global constants";

function Alerte() {

    const generateContent = () => {
        let content = []
        for (let i = 0; i <= 15; i++) {
            content.push(
                <><span className="alertLabel">WARNING</span>
                    <img className='alertImage' src={`${GlobalConstants.urlFile}/gameDisplay/alertPanneau.png`}
                         alt=""/></>
            )
        }
        return content
    }

    let content = generateContent()
    return <>
        <div className="alertPage">
            <div className="alerteBande">
                <div className="alerteBande1">
                    {content}
                </div>
            </div>


            <div className='accessdeniedImage'><Intro/></div>
            <div className="alerteBande">
                <div className="alerteBande2">
                    {content}
                </div>
            </div>
        </div>

    </>
}

export default Alerte