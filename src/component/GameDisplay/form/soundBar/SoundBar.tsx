import './soundbar.css'
import {useState} from "react";
import {GlobalConstants} from "../../../../Common/Global constants";

function getRandomInt() {
    return 36 + Math.floor(Math.random() * 50);
}


function SoundBar({file}) {
    const soundBars = [];
    const [pauseVisibility, setPauseVisibility] = useState(false)
    const [startVisibility, setStartVisibility] = useState(true)
    const [soundBarMoove, setSoundBarMoove] = useState(false)

    for (let i = 1; i < 30; i++) {

        soundBars.push(
            <div key={i} className={`soundbar soundBar${i} ${(soundBarMoove) ? `moove${i}` : ''}`}
                 style={{height: `${getRandomInt()}px`}}></div>);
    }
    return (
        <>
            <div className="soundContainer">
                <audio controls src={GlobalConstants.urlFile + '/files/' + {file}} onEnded={() => {
                    setPauseVisibility(false);
                    setStartVisibility(true);
                    setSoundBarMoove(false)
                }}></audio>
                <div className="soundBarBackground d-flex flex-row align-items-center ">{soundBars}</div>

                <div className="d-flex flex-row icContainer ">
                    <div className="icSound icSkip"><i className="bi bi-skip-start-fill"></i></div>
                    {startVisibility && (<>
                        <div className="icSound"></div>
                        <i className="bi bi-play-fill"></i></>)
                    }
                    {pauseVisibility &&
                        <div className="icSound"><i className="bi bi-pause-fill"></i>
                        </div>}
                    <div className="icSound icSkip"><i className="bi bi-skip-end-fill"></i></div>

                </div>
            </div>
        </>
    )


}

export default SoundBar