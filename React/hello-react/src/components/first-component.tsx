/*
 * They can take in values, and execute some code
 * Our react components will all be arrow functions ( Functional Components)
 * In this component, we're providing no values, hence the empty()
 * 
 * "export"   - we need this so our component can be imported around the app
 * "const"    - the component can't be reassigned, changed, etc
 * "React.FC" - We're saying this is a React Functional Component (FC)
 *        - Basically we are defining what datatype this function returns
*/
export const FirstComponent: React.FC = () => {

    // We can define variables and logic in the space above the  returned view
    const message: String = "I am a valued stored in First Component, and rendered to TSX";
    // Notice the data binding message in the view.
    return (
        <>
            <h3>This is our first component</h3>
            <p>Data Binding: {message}</p>
        </>
    );
}