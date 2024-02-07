import './GameDisplay/gameDisplay.css'

import {GlobalConstants} from "../Common/Global constants.ts";

import {useEffect, useState} from "react";
import Intro from "./GameDisplay/introOutro/intro";
import ScoreBoard from "./scoreBoard/ScoreBoard";
import Bouton from "./button/Bouton";
import './../index.css'
import Outro from "./GameDisplay/introOutro/Outro";
import Form from "./GameDisplay/form/form";
import GameManaging from "./regie/GameManaging";
import Video from "./Video/Video";
import lastPart, {getParty, getScoreData} from "../Service/apiService";
import {showCount} from "../Service/compteurApiService";
import Alerte from "./Alerte/Alerte";


function GameDisplay() {


    let manche1 = GlobalConstants.manche1;
    let startM1 = GlobalConstants.startM1;
    let endM1 = GlobalConstants.endM1;
    let manche2 = GlobalConstants.manche2;
    let startM2 = GlobalConstants.startM2;
    let endM2 = GlobalConstants.endM2;
    let manche3 = GlobalConstants.manche3;
    let startM3 = GlobalConstants.startM3;
    let endM3 = GlobalConstants.endM3;
    let bonus = GlobalConstants.bonus;
    let bonusqts = GlobalConstants.bonusqts;
    let score = GlobalConstants.score;
    let videoScore = GlobalConstants.videoScore;
    let alert = GlobalConstants.alert;
    let outro = GlobalConstants.outro;
    let party = GlobalConstants.party;

    const getCount = () => {

        showCount(GlobalConstants.compteurId).then(response => {
            if (step != response.compteur) {
                setStep(response.compteur)
            }
            if (showExplication != response.isExplicationVisible) {
                setShowExplication(response.isExplicationVisible)
                showQuestion()
            }
            if (isResponseVisible != response.isResponseVisible) {
                setIsResponseVisible(response.isResponseVisible)
                showQuestion()
            }
            setFormulaireNb(response.numberForm)



        })
    }
    const getScores = () => {
        getScoreData().then(response => {
            setJoueurScore1(response[0])
            setJoueurScore2(response[1])
            setJoueurScore3(response[2])
        })
    }


    let content
    let [step, setStep] = useState(0)
    const [questionData, setQuestionData] = useState({});
    const [joueurScore1, setJoueurScore1] = useState();
    const [joueurScore2, setJoueurScore2] = useState(0);
    const [joueurScore3, setJoueurScore3] = useState(0);
    let [showExplication, setShowExplication] = useState(false)
    let [isResponseVisible, setIsResponseVisible] = useState(false)
    const [formulaireNb, setFormulaireNb] = useState(2);

    useEffect(() => {
        const intervalId = setInterval(() => {
            getCount()
            getScores()

        }, 2000);

        if (0 == step) {
            getCount()
            console.log(formulaireNb)
            getParty(formulaireNb).then(response => {
                if (response.draw && response.draw.question) {
                    setQuestionData(response.draw.question);
                }
            })
        }
        return () => clearInterval(intervalId);

    }, [step, showExplication, isResponseVisible])

    if (step === party.intro) {
       content = (<Intro/>
        )
    }
    if (step === party.videoIntro) {
        content = (<Video source={'Intro Capitaine v2.mp4'} classe='fullVideo' />)
    }

    if ([manche1, manche2, manche3, bonus].includes(step)) {
        if (manche1 == step) {
                content = (<Video source={'Manche 1.mp4'} classe='fullVideo'/>)
        }
        if (manche2 == step) {

                content = (<Video source={'Manche 2.mp4'} classe='fullVideo'/>)
        }
        if (manche3 == step) {

                content = (<Video source={'Manche 3.mp4'} classe='fullVideo'/>)
        }
        if (bonus == step) {
          content = (<Video source={'Question bonus.mp4'} classe='fullVideo'/>)
        }
    }
    const showQuestion = () => {
       let decalage = startM1
        if (step >= startM2) {
            decalage = startM1 + 1
        }
        if (step >= startM3) {
            decalage = startM1 + 2
        }
        const question = questionData[step - decalage] || questionData[0];
        content = (<Form question={question} isResponseVisible={isResponseVisible} showExplication={showExplication}/>
        )
    }
    if (startM1 <= step && step <= endM1 || startM2 <= step && step <= endM2 || startM3 <= step && step <= endM3 || bonusqts == step) {
        showQuestion()
    }
    if (step === score) {
        content = (<><ScoreBoard scores={[joueurScore1, joueurScore2, joueurScore3]}/></>)
    }
    if (step === videoScore) {
        content = (<Video source={'Outro vainqueur.mp4'} classe='fullVideo'/>)
    }
    if (step === alert) {
        content = (content = (<Alerte/>))
    }
    if (step === outro) {
        content = (<Outro/>)
    }



    return (<>
        <div className="content">{content}
        </div>

    </>)


}

export default GameDisplay