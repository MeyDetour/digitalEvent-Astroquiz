import {GlobalConstants} from "../../../../Common/Global constants";
import './showImage.css'


function ShowImage({image,classname}) {
    return (

            <div className="imageContainer">
                  <img className={classname} src={GlobalConstants.urlImage+"/files/"+ {image}} alt=""/>

            </div>

    )
}

export default ShowImage