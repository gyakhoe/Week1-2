import React, { useState } from "react";
import "./Calculation.css"

function Calculation() {


    const [sideB, setSideA] = useState<number>(0);
    const [sideA, setSideB] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    // Function to store sideA and sideB when the input boxes change
    const storeValues = (event: React.ChangeEvent<HTMLInputElement>) => {

        // If the name of changed input is "SideA", then store SideA
        // Otherwise, store sideB
        if (event?.target?.name === 'SideA') {
            setSideA(Number(event.target.value));
        } else {
            setSideB(Number(event.target.value));
        }
        setResult("");
    }

    //Function to do the calculation and store it in the result state variable
    const calculation = () => {
        // TODO: some user input handling?
        const result = Math.hypot(sideA, sideB);

        // We can set the result using state mutator
        setResult(result);
    }

    return (
        <div className="input-container">
            <h3>Calculation Component</h3>

            <input type="number" name="SideA" onChange={storeValues} />
            <input type="number" name="SideB" onChange={storeValues} />

            {/* Conditional Rendering! If SideA OR SideB are <= 0 render a message telling the user to input valid values */}
            <p style={{ color: "red" }}>
                {/* Are SideA or SideB 0 or less? if so, render a message. otherwise render nothing */}
                {sideA <= 0 || sideB <= 0 ? "please enter a valid value for both sides" : ""}
            </p>
            <p>
                {/* If the result is truthy show the calculation else show nothing */}
                {result ? "You calculated " + result : ""}
            </p>

            <button onClick={calculation}>Calculate!</button>

        </div>
    )
}

export default Calculation;