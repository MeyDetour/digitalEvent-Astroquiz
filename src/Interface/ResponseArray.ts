import {Response} from "./Response";

export default interface ResponseArray{
    responses:Response[]
    responseVisibility?:boolean
    explicationVisibility?:boolean
    type : string
}