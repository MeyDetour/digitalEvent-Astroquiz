
import BoutonInterface from "../../Interface/BoutonInterface";


function Button(props:BoutonInterface){
    return (
        <button className={props.className} onClick={props.onClick}>{props.children}</button>
    )

}
export default Button