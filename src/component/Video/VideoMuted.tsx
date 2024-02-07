import {GlobalConstants} from "../../Common/Global constants";
import VideoInterface from "../../Interface/VideoInterface";

export default function VideoMuted({source, classe,actionEnd = ()=>{}}: VideoInterface) {
    return <>
        <video className={classe} muted preload="auto" autoPlay onEnded={actionEnd} >
                  <source  src={`${GlobalConstants.urlFile}/gameDisplay/${source} `} type="video/mp4" />
        </video></>
}
