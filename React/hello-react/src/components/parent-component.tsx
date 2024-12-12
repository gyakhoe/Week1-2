import React, { useState } from "react";
import { ChildComponent } from "./child-component";

export const ParentComponent: React.FC = () => {
    // TODO: Notes on state
    const [favColor, setColor] = useState("Blue")

    return (
        <>
            <h3>Hello from the Parent Component</h3>
            <ChildComponent color={favColor} />
        </>
    );
}