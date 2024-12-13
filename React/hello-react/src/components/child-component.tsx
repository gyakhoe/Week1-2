import React from "react";

/*
 *
 * In this component, props is of <ChildProps> type. What is that and what is props?
 * Props is the data sent in from a parent component (The properties teh child component takes in)
 * ParentComponent will render a ChildComponent in its TSX, and pass some values to it
 * 
 * We defined an interface (which is like a Java model) to define the values in this Child's props
 * We can then use these values once they're sent in from a parent rendering this component
 * 
 */

interface ChildProps {
    color: String
    song: string
}

export const ChildComponent: React.FC<ChildProps> = ({ color, song }) => {
    return (
        <>
            <h4> Hello from Child Component </h4 >
            <p> My parent's fav color is : {color}</p>
            <p> My parent's fav song is : {song}</p>
        </>
    );
}