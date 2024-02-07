import React, {useState} from 'react'
import './question.css';
import '../../../index.css'
import Reponses from "./Reponses";
import {GlobalConstants} from "../../../Common/Global constants";

interface Props {
    question: string;
    sizeClass?: string

}

function Question(props: Props) {



    return (<>
        <div className={`cadre cadreQuestion ${props.sizeClass}`}>{props.question}</div>
    </>)
}

export default Question