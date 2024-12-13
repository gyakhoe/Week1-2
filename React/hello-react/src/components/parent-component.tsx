import React, { useState } from "react";
import { ChildComponent } from "./child-component";

export const ParentComponent: React.FC = () => {

    /*
        *
        * We can use the "useState" hook to define state 
        * State is an object that stores data related to ca component
        * 
        * Why not just use a regular variable?
        * There are two advantages to using state 
        *   - We can easily pass state data to a child component's props
        * When a component's state changes, it re-renders the component
        * 
        * To use state in a component, we declare:
        *   1. A variable that lets us ACCESS the state value
        *   2. A mutator (like a setter in Java) it lets us change the state value
        *   3. The actual "useState" hook, which initializes state and lets us set default value
        * 
    */
    const [favColor, setColor] = useState<string>("Blue");
    const [favSong, setSong] = useState<string>("Give up the funk");

    return (
        <>
            <h3>Hello from the Parent Component</h3>
            <ChildComponent color={favColor} song={favSong} />
        </>
    );
}