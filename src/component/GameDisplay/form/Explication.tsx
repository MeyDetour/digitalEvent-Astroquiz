import ResponseArray from "../../../Interface/ResponseArray";
import React from "react";


function Explication(responsesArray:ResponseArray){

    return (
        <>
            <div className="trueResponseDiv  ">
                {responsesArray.responses.map((response) => (
                    ((response.isTrue ) && (
                        <>
                            <span  className={(response.valueResponse.length > 50 )?'fontSizeSm' : 'fontSizeLg' }><b>{response.valueResponse}</b></span>
                            <div className={( response.explication && (response.explication.length > 50 )?'fontSizeSmExplication' : 'fontSizeLgExplication' )}>{response.explication}</div>
                        </>
                    ))

                ))}
            </div>
        </>)

}
export default Explication