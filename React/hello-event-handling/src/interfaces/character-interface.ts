// Interfaces in TS are like model class in Java
// We are going to use it in character and character container
// So it is nice write as globally accessible interface that wil basically act as a custom datatype

export interface CharacterInterface {
    name: String,
    house: String,
    quote: String,
    weapon?: String,
    // "?" just means that value is optional
}

