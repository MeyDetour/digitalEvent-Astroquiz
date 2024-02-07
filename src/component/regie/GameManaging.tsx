import './reggie.css'

import Button from "../button/Bouton";
import PointBouton from "./component/PointBouton";

import {Response} from "../../Interface/Response";

import {GlobalConstants} from "../../Common/Global constants";
import {useState} from "react";
import {addPoint} from "../../Service/apiService";
import {createLogger} from "vite";


function goodResponse(array: Response[]) {
    let trueResponse
    array.map((response) => {

        if (response.isTrue) {
            trueResponse = response
        }
    })
    return trueResponse

}

function formatResponses(arrayResponses: Response[]) {
    return (
        <div className='responsEexplication'>
            {arrayResponses.map((responseObj: Response) => (
                responseObj.response.isTrue ? (
                    <span key={responseObj.id} className='reggieTrueResponse'>
                        {responseObj.letter} - {responseObj.response.valueResponse} /{' '}
                    </span>
                ) : null
            ))}
            {arrayResponses.map((responseObj: Response) => (
                !responseObj.response.isTrue ? (
                    <span key={responseObj.id} className='reggiePossibleResponse'>
                        {responseObj.letter} - {responseObj.response.valueResponse} /{' '}
                    </span>
                ) : null
            ))}
        </div>
    );
}


function listeObjectResponse(listeResponses) {
    let numeroReponse = ['A', 'B', 'C', 'D'];
    let liste = []
    for (let i = 0; i < listeResponses.length; i++) {
        liste.push({
            response: listeResponses[i],
            letter: numeroReponse [i]

        })
    }
    return liste
}


function GameManaging({
                          currentQuestion,
                          onClickNextQuestion,
                          onClickShowResponse,
                          onClickShowExplication,
                          onResetClick,
                          scores

                      }) {

    if (!currentQuestion) {
        return onClickNextQuestion
    }
    let questionName = currentQuestion.question
    let responses: Response[] = currentQuestion.responses
    let letterResponse = listeObjectResponse(responses)
    let questionExplication = (goodResponse(responses).explication) ? goodResponse(responses).explication : ''
    let listeFormatResponses = formatResponses(letterResponse)
    let qtsPt = currentQuestion.point

    let joueurScore1 = scores[0]
    let joueurScore2 = scores[1]
    let joueurScore3 = scores[2]
    const [joueurFocus1, setJoueurFocus1] = useState(false);
    const [joueurFocus2, setJoueurFocus2] = useState(false);
    const [joueurFocus3, setJoueurFocus3] = useState(false);
    const [btnFocus1, setBtnFocus1] = useState(false);
    const [btnFocus2, setBtnFocus2] = useState(false);

    const updatePoint = () => {
        unfocusJoueurBtn()
        unfocusBtn12()
        addPoint(currentQuestion.id, getAnswerer()).then(
            response => {
                console.log('point ajouter', response)
            }
        )
    }
    const getAnswerer = () => {
        let joueur = [joueurFocus1, joueurFocus2, joueurFocus3].indexOf(true) + 1
        let a = {
            1: joueurScore1.participant.id,
            2: joueurScore2.participant.id,
            3: joueurScore3.participant.id,
        }
        return a[joueur]
    }

    const unfocusJoueurBtn = () => {

        setJoueurFocus1(false)
        setJoueurFocus2(false)
        setJoueurFocus3(false)
    }
    const unfocusBtn12 = () => {
        setBtnFocus1(false)
        setBtnFocus2(false)
    }
    const changeFocusJoueur1 = () => {
        unfocusJoueurBtn()
        setJoueurFocus1(true)
    }
    const changeFocusJoueur2 = () => {
        unfocusJoueurBtn()
        setJoueurFocus2(true)
    }
    const changeFocusJoueur3 = () => {
        unfocusJoueurBtn()
        setJoueurFocus3(true)
    }
    const changeFocusBtn1 = () => {
        unfocusBtn12()
        setBtnFocus1(true)
    }
    const changeFocusBtn2 = () => {
        unfocusBtn12()
        setBtnFocus1(false)
    }

    return <>

        <div className="reggiePage ">

            <div className="reggieSection gap-5">
                <span className="titleSection">Points</span>

                <div className="d-flex flex-column align-items-end gap-5">
                    <div className="scoreContainer">
                        <div onClick={() => {

                            changeFocusJoueur1()
                        }}><PointBouton clicked={joueurFocus1}
                                        point={joueurScore1.point.point + ((joueurFocus1) ? qtsPt : 0)}>{GlobalConstants.avatars[joueurScore1.participant.id][1]}</PointBouton>
                        </div>
                        <div onClick={() => {

                            changeFocusJoueur2()
                        }}><PointBouton clicked={joueurFocus2}
                                        point={joueurScore2.point.point + ((joueurFocus2) ? qtsPt : 0)}>{GlobalConstants.avatars[joueurScore2.participant.id][1]}</PointBouton>
                        </div>
                        <div onClick={() => {

                            changeFocusJoueur3()
                        }}><PointBouton clicked={joueurFocus3}
                                        point={joueurScore3.point.point + ((joueurFocus3) ? qtsPt : 0)}>{GlobalConstants.avatars[joueurScore3.participant.id][1]}</PointBouton>
                        </div>

                    </div>
                    <Button onClick={onResetClick} className="alert">ALERTE</Button>
                </div>
            </div>

            <div className="reggieSection gap-5">
                <span className="titleSection">Question{currentQuestion.id}</span>
                <div className="d-flex flex-column align-items-end gap-5">

                    <div className="scoreContainer"><span className="titleSection">({qtsPt} pt)</span>
                        {questionName}</div>
                    <div className="scoreContainer ">
                        <span>{listeFormatResponses}</span>
                        <p>{questionExplication}</p>

                    </div>
                    <div className="d-flex flex-row">
                        <div className={(btnFocus1) ? 'boutonReggieFocus' : undefined} onClick={() => {
                            changeFocusBtn1()
                        }}><Button className="nextQuestion" onClick={onClickShowResponse}>ShowResponse</Button></div>
                        <div className={(btnFocus2) ? 'boutonReggieFocus' : undefined} onClick={() => {
                            changeFocusBtn2()
                        }}><Button className="nextQuestion" onClick={onClickShowExplication}>Show Explication</Button>
                        </div>


                        <Button className="nextQuestion" onClick={() => {
                            onClickNextQuestion();
                            updatePoint()
                        }
                        }>Next Question</Button>

                    </div>
                </div>
            </div>


        </div>

    </>
}

export default GameManaging