import './regie/reggie.css'
import GameManaging from "./regie/GameManaging";
import {GlobalConstants} from "../Common/Global constants";
import './regie/component/avatarchoice.css'
import {useEffect, useState} from "react";
import ScoreBoard from "./scoreBoard/ScoreBoard";
import Button from "./button/Bouton";

import Video from "./Video/Video";

import Outro from "./GameDisplay/introOutro/Outro";

import SelectPlayer from "./regie/SelectPlayer";
import lastPart, {getParty, getScoreData} from "../Service/apiService";
import {
    countDown,
    countUp,
    newCount, setExplicationNoVisible,
    setExplicationVisible, setResponseNoVisible,
    setResponseVisible,
    showCount
} from "../Service/compteurApiService";
import reponses from "./GameDisplay/form/Reponses";
import Alerte from "./Alerte/Alerte";
import VideoMuted from "./Video/VideoMuted";

'use client';


function ReggieDisplay() {
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
    let compteurId = GlobalConstants.compteurId


    const upgradeCount = () => {
        countUp(compteurId).then(respose => {
            getCount()
            hideResponse()
            hideExplication()
        })

    }
    const reset = () => {
        countDown(compteurId).then(respose => {
            getCount()
            hideResponse()
            hideExplication()
        })

    }
    const getCount = () => {
        showCount(compteurId).then(response => {
                setStep(response.compteur)
                console.log('getCount', step)
            }
        )
    }
    const hideResponse = () => {

        setResponseNoVisible(GlobalConstants.compteurId).then(response => {
            setIsResponseVisible(false)

        })
    }
    const hideExplication = () => {

        setExplicationNoVisible(GlobalConstants.compteurId).then(response => {

            setShowExplication(false)
        })
    }
    const showResponse = () => {
        if (showExplication) {
            hideExplication()
        }
        if (isResponseVisible) {
            hideResponse()
        }
        setResponseVisible(GlobalConstants.compteurId).then(response => {
            setIsResponseVisible(true)
        })
    }
    const showEplication = () => {
        if (isResponseVisible) {
            hideResponse()
        }
        if (showExplication) {
            hideExplication()
        }
        setExplicationVisible(GlobalConstants.compteurId).then(response => {
            setShowExplication(true)
        })
    }
    const getScores = () => {
        getScoreData().then(response => {
            setJoueurScore1(response[0])
            setJoueurScore2(response[1])
            setJoueurScore3(response[2])
        })
    }
    const [joueurScore1, setJoueurScore1] = useState();
    const [joueurScore2, setJoueurScore2] = useState(0);
    const [joueurScore3, setJoueurScore3] = useState(0);

    let [step, setStep] = useState(0)
    let [showExplication, setShowExplication] = useState(false)
    let [isResponseVisible, setIsResponseVisible] = useState(false)
    const [questionData, setQuestionData] = useState(null);


    useEffect(() => {
        getScores()
        if (manche1 == step) {
            getParty(GlobalConstants.formulaireNumber).then(response => {
                if (response.draw && response.draw.question) {
                    setQuestionData(response.draw.question);

                }
            })
        }
    }, [step])


    let content
    if (step == party.intro) {

        content = (
            <SelectPlayer action={() => {
                upgradeCount()
            }} action2={upgradeCount}/>
        )

    }
    if (step === party.videoIntro) {
        content = (<VideoMuted source={'Intro Capitaine v2.mp4'} classe='fullVideo' actionEnd={upgradeCount} />)
    }


    if ([manche1, manche2, manche3, bonus].includes(step)) {

        if (manche1 == step) {
            content = (
                content = (<VideoMuted source={'Manche 1.mp4'} classe='fullVideo'  actionEnd={upgradeCount} />)


            )
        }
        if (manche2 == step) {
            content = (
                content = (<VideoMuted source={'Manche 2.mp4'} classe='fullVideo'  actionEnd={upgradeCount} />)


            )
        }
        if (manche3 == step) {
            content = (
                content = (<VideoMuted source={'Manche 3.mp4'} classe='fullVideo'  actionEnd={upgradeCount} />)


            )
        }
        if (bonus == step) {
            content = (
                content = (<Video source={'Question bonus.mp4'} classe='fullVideo'  actionEnd={upgradeCount}/>)


            )
        }
    }
    if (startM1 <= step && step <= endM1 || startM2 <= step && step <= endM2 || startM3 <= step && step <= endM3 || bonusqts == step) {
        console.log(joueurScore1, joueurScore2, joueurScore3)
        let decalage = startM1
        if (step >= startM2) {
            decalage = startM1 + 1
        }
        if (step >= startM3) {
            decalage = startM1 + 2
        }
        let question
        if (!questionData[step - decalage]) {
            question = questionData[0]
        } else {
            question = questionData[step - decalage]
        }
        content = (
            <GameManaging currentQuestion={question} onClickNextQuestion={() => {
                upgradeCount()
            }} onClickShowResponse={() => {
                showResponse()
            }} onClickShowExplication={() => {
                showEplication()
            }} onResetClick={() => {
                reset()
            }} scores={[joueurScore1, joueurScore2, joueurScore3]}/>
        )


    }
    if (step === outro) {
        content = (
            <Outro/>
        )
    }
    if (step === alert) {
        content = (
            <Alerte/>
        )
    }
    if (step === videoScore) {
        content = (
            <span className="reggieTrueResponse">video score</span>

        )
    }
    if (step === score) {
        content = (<>
            <ScoreBoard scores={[joueurScore1, joueurScore2, joueurScore3]}/>
        </>)
    }


    return (
        <div className='reggie'>

            {content}
            <Button onClick={upgradeCount}>Prochaine etape</Button>
            <Button onClick={reset}>breakall</Button>
        </div>
    )
}

export default ReggieDisplay
