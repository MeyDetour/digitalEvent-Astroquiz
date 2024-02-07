import {Response} from "./Response";

export default interface Question{
    id : number;
    question : string;
    response : Response[]
    point : number;
    category : string;
    type : string;
}