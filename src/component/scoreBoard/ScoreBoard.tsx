import {GlobalConstants} from "../../Common/Global constants";
import './score.css'


function ScoreBoard({scores}) {

    let avatars = GlobalConstants.avatars
    let joueurScore1 = scores[0]
    let joueurScore2 = scores[1]
    let joueurScore3 = scores[2]
    let podium = ['second','first','third']

    let content = [];
    [joueurScore1, joueurScore2, joueurScore3].map((joueur,items) => {
        content.push(
            <div className=" scoreBar d-flex flex-column align-items-center">
                <img
                    src={GlobalConstants.urlFile + "/gameDisplay/avatar/" + avatars[joueur.participant.id][0]}
                    alt="IMAGE DE L'AVATAR"/>
                <div className={podium[items]}><span>{joueur.point.point}</span></div>
                <span className="avatarName">{avatars[joueur.participant.id][1]}</span>
            </div>
        )

    })

    return <>
        <div className="scoreBoard d-flex flex-column align-items-center">
            <img src={GlobalConstants.urlFile + "/scoreBoard/classementText.png"} alt="CLASSEMENT"/>
            <div className=" scoreBarContainer d-flex justify-content-around flex-row align-items-end">
                {content}
            </div>
        </div>

    </>
}

export default ScoreBoard