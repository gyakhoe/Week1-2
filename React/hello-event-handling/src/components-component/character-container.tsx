// This component will render multiple character components

import { useEffect, useState } from "react";
import { CharacterInterface } from "../interfaces/character-interface";
import Character from "./character";


function CharacterContainer() {

    // State variable that holds an Array of character interfaces
    // This Array will get populated when the component renders thanks to the useEffect
    const [characters, setCharacter] = useState<CharacterInterface[]>([]);

    // We'll use a useEffect to simulate a GET request that fills the Character array 
    // Imagine that when this component render, a GET is sent to the backend for relevant data
    useEffect(() => {
        // set the character state array to hold some GOT characters
        // Here the HTTP request would happen.
        setCharacter(
            [
                {
                    name: "Jon Snow",
                    house: "Stark",
                    quote: "I don't want it.",
                    weapon: "Longclaw"
                },
                {
                    name: "Arya Stark",
                    house: "Stark",
                    quote: "Not today.",
                    weapon: "Needle"
                },
                {
                    name: "Daenerys Targaryen",
                    house: "Targaryen",
                    quote: "Dracarys.",
                },
            ]
        );
    }, []); // We added [] at the end, which means this useEffect will run once the component renders.
    return (
        <>
            <h2>Character Container: </h2>

            {/* Using map() to render a Character component for every character in the Array */}
            <div>
                {characters.map((character: CharacterInterface) => {
                    return <Character {...character} />
                })}
            </div>
            {/* All that's happening is : 
                - Loop through the characters state array
                - For every character interface object in the array, render a character component
                we can pass in an entire object using the "..." syntax AKA the spread operator
                 */}
        </>
    );
}

export default CharacterContainer;

