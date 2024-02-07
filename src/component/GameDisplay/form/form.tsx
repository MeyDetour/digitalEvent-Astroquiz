import {GlobalConstants} from "../../../Common/Global constants";
import Question from "./Question";
import Reponses from "./Reponses";
import Explication from "./Explication";
import ShowImage from "./image/showImage";
import PropsQuestion from "../../../Interface/PropsQuestion";
import SoundBar from "./soundBar/SoundBar";


function Form({question,isResponseVisible,showExplication}: PropsQuestion) {

    let file
    let template
    const questionName = question.question
    const responsesArray = question.responses
    const point = question.point
    const category = question.category.name
    const type = question.type.name
    if(question.type.file){
        file = question.type.file
    }

    console.log(point,category,type,questionName,responsesArray,file)


    if (type === GlobalConstants.typeMultipleChoice) {
        template = (<>
                <Question question={questionName}/>
                {!showExplication && (
                    <Reponses type={type} responses={responsesArray} responseVisibility={isResponseVisible}/>)}
                {showExplication && (<Explication responses={responsesArray} type={type}/>)}
            </>
        )
    }
    if (type === GlobalConstants.typeTrueFalse) {

        template = <>

            <Question question={questionName}/>
            {!showExplication && (
                <Reponses type={type} responses={responsesArray} responseVisibility={isResponseVisible}
                          explicationVisibility={showExplication}/>)}
            {showExplication && (<Explication responses={responsesArray} type={type}/>)}
        </>

    }

    if (type === GlobalConstants.typeSoundQuizz) {

        template = <>
            <Question question={questionName}/>
            {(!isResponseVisible && !showExplication) && <SoundBar file={file}/>}
            {(isResponseVisible || showExplication) &&
                <Explication type={type} responses={responsesArray} responseVisibility={isResponseVisible}/>}
        </>
    }
    if (type === GlobalConstants.typeImage) {

        template = <>
            <div className="questionRow">
                <div className="d-flex flex-column align-items-center gap-5">
                    <Question question={questionName} sizeClass="smallCadreQuestion"/>
                    {(isResponseVisible || showExplication) &&
                        <Explication type={type} responses={responsesArray} responseVisibility={isResponseVisible}/>}

                </div>
                <ShowImage url={file} classname='image'/>
            </div>
        </>


    }
    if (type === GlobalConstants.typeSimpleQuestion) {

        template = <>
            <Question question={questionName}/>
            {(isResponseVisible || showExplication) &&
                <Explication type={type} responses={responsesArray} responseVisibility={isResponseVisible}/>}


        </>


    }

    return (<>

            <div className="gameDisplay">
                {template}
            </div>
        </>
    )


}

export default Form