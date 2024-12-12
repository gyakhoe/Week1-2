import React from "react";

// TODO: Notes on props

export const ChildComponent: React.FC<any> = ({ color }) => {
    return (
        <>
            <h4> Hello from Child Component </h4 >
            <p> My parent's fav color is : {color}</p>
        </>
    );
}