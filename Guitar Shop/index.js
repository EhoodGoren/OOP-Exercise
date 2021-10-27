class ClassicGuitar {
    #id;
    constructor(manufactureYear, brand, price, numberOfStrings = 6, id){
        this._manufactureYear = manufactureYear;
        this._brand = brand;
        this._price = price;
        this._numberOfStrings = numberOfStrings;
        this._used = false;
        this.#id = id;
    }
    play(){
        this._price = this._price * 0.9;
        return "🎶🎶🎶";
    }

    // Getters
    get manufactureYear(){ return this._manufactureYear; }
    get brand(){ return this._brand; }
    get price(){ return this._price; }
    get numberOfStrings(){ return this._numberOfStrings; }
    get id(){ return this.#id; }

    // Setter
    set setPrice(price){
        this._price = price;
        return this._price;
    }

    static detectSound(sound){
        if(sound.includes("🔊")){
            return "Classic guitar";
        }
        else if(sound.includes("🎸")){
            return "Electric Guitar";
        }
        return;
    }
}
const myGuitar = new ClassicGuitar(2000, "Guitar A", 1500, undefined, 5);

class ElectricGuitar extends ClassicGuitar{
    constructor(manufactureYear, brand, price, numberOfStrings = 6, id, longNeck){
        super(manufactureYear, brand, price, numberOfStrings, id);
        this.longNeck = longNeck;
    }
    play(){
        return "🎸🎸🎸";
    }
}

class BassGuitar extends ClassicGuitar{
    constructor(manufactureYear, brand, price, numberOfStrings = 4, id){
        super(manufactureYear, brand, price, numberOfStrings, id);
    }
    playSolo(){
        const solo = generateSolo();
        return solo;
    }
    play(){
        return "🔊🔊🔊";
    }
}

function generateSolo(){
    const notes = [ "💥", "🤘", "🎵", "📢", "💢", "🕺" ]
    let solo = "";
    const notesNum = Math.floor(Math.random() * 10) + 5;
    for (let i = 0; i < notesNum; i++) {
        const randomNotePlace = Math.floor(Math.random() * 6);
        const randomNote = notes[randomNotePlace];
        solo = solo.concat(randomNote);
    }
    return solo;
}
