import PlayerSelection from "../../Interface/PlayerSelection";
import {useEffect, useState} from "react";
import {GlobalConstants} from "../../Common/Global constants";
import {addUser, getParty, getScore} from "../../Service/apiService";
import reponses from "../GameDisplay/form/Reponses";


export default function SelectPlayer({text, action, action2}) {

    const create = () => {
        addUser(joueur1, joueur2, joueur3)
        GlobalConstants.formulaireNumber = Number(formulaireNb)
        getParty(Number(formulaireNb))
    }

    let content
    let avatars = GlobalConstants.avatars
    const [formulaireNb, setFormulaireNb] = useState('1');
    const [avatarSelected, setAvatarSelected] = useState(false);
    const [joueur1, setJoueur1] = useState('1');
    const [joueur2, setJoueur2] = useState('2');
    const [joueur3, setJoueur3] = useState('3');


    const joueur1Change = (e) => {
        setJoueur1(e.target.value);
    };

    const joueur2Change = (e) => {
        setJoueur2(e.target.value);
    };

    const joueur3Change = (e) => {
        setJoueur3(e.target.value);
    };
    const formulaireChange = (e) => {
        setFormulaireNb(e.target.value);
    };

    //list of possible avatars
    let choice = (
        <>
            {avatars.map((avatar) => (
                <option key={avatars.indexOf(avatar) + 1} value={avatars.indexOf(avatar) + 1}>
                    {avatar[1]}
                </option>
            ))}

        </>
    );
    if (avatarSelected) {
        content = (<>
            <div className="d-flex flex-row">

                <img src={GlobalConstants.urlImageAvatar + '/' + GlobalConstants.avatars[joueur1 - 1][0]} alt="image"/>
                <img src={GlobalConstants.urlImageAvatar + '/' + GlobalConstants.avatars[joueur2 - 1][0]} alt="image"/>
                <img src={GlobalConstants.urlImageAvatar + '/' + GlobalConstants.avatars[joueur3 - 1][0]} alt="image"/>
                <span className="bg-primary">formulaire {formulaireNb}</span>

            </div>
        </>)


    } else {
        content = (<>
            <span className="titleSection">JOUEURS</span>

            <form className='d-flex flex-column align-items-end gap-5'>
                <div className="regieChoiceContainer">
                    <fieldset>
                        <legend>Joueur 1</legend>
                        <select value={joueur1} onChange={joueur1Change}>
                            {choice}
                        </select>
                    </fieldset>
                    <fieldset>
                        <legend>Joueur 2</legend>
                        <select value={joueur2} onChange={joueur2Change}>
                            {choice}
                        </select>
                    </fieldset>
                    <fieldset>
                        <legend>Joueur 3</legend>
                        <select value={joueur3} onChange={joueur3Change}>
                            {choice}
                        </select>
                    </fieldset>
               </div>
                <div className="regieChoiceContainer">
                    <fieldset>
                        <legend>Formulaire</legend>
                        <select value={formulaireNb} onChange={formulaireChange}>
                            <option key='1' value='1'> 1</option>
                            <option key='2' value='2'> 2</option>
                            <option key='3' value='3'> 3</option>
                            <option key='4' value='4'> 4</option>
                        </select>
                    </fieldset>
                </div>
                <button className='alert' type="submit" onClick={() => {
                    create();
                    setAvatarSelected(true);
                }}>Soumettre
                </button>
            </form>
        </>)
    }
    return <>
        <div className="reggiePage ">
            <div className="reggieSection gap-5">

                {content}
            </div>
        </div>
    </>

}
