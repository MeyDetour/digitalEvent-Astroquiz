// Reponse.jsx
import React from 'react';
import './reponse.css'
import ResponseArray from "../../../Interface/ResponseArray";
import {Response} from "../../../Interface/Response";
import {GlobalConstants} from "../../../Common/Global constants";


// Utilisez l'interface Props dans votre composant
function Reponses(responsesArray: ResponseArray) {
    let numeroReponse = ['A', 'B', 'C', 'D'];


    return (<div className="row  justify-content-center">

        {responsesArray.responses.map((response: Response) => (
            <div  className={`cadreReponseBlanc col-6 cadre  ${response.valueResponse}  ${(response.isTrue && responsesArray.responseVisibility) ? 'cadreTrueResponse' : ''}`}
                key={response.id}>
                {(!responsesArray.responses.includes('Vrai')) ? (
                    <> <span
                        className={`reponseLetter ${(responsesArray.responseVisibility && response.isTrue) ? 'trueResponse' : 'neutreResponse'} `}>
                {numeroReponse[responsesArray.responses.indexOf(response)]}
              </span> <span>{response.valueResponse}</span>  </>) : (
                    <span className="reponseTrueFalse">{response.valueResponse}</span>)}
            </div>
        ))}
    </div>)


}

export default Reponses;
