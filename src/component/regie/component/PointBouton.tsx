import BoutonInterface from "../../../Interface/BoutonInterface";
import '../reggie.css'
import {useState} from "react";

export default function PointBouton(props: BoutonInterface) {

    return <>
        <div className="bouttonFond">
            <div className={`${props.clicked && ('boutonClicked')}  boutonName`} >{props.children}</div>
            <span>{props.point}pt</span>
        </div>

    </>
}