// This will get rendered once for every Character in the Array in Character Container

import { CharacterInterface } from "../interfaces/character-interface";

// This will take props of the Character interface to render character data
function Character(character: CharacterInterface) {

    // This component will render whatever character was passed in as props
    return (
        <>
            <div>
                <h3>{character.name} belongs to {character.house}</h3>
                <h4>Wielding {character.weapon}</h4>
            </div>
            <div>
                <h4>"{character.quote}"</h4>
            </div>
        </>
    );
}

export default Character;