class ClassicGuitar {
    constructor(manufactureYear, brand, price, numberOfStrings = 6, id){
        this.manufactureYear = manufactureYear // num
        this.brand = brand // string
        this.price = price // number
        this.numberOfStrings = numberOfStrings //num
        this.used = false;
        this.id = id // private
    }
    play(){
        console.log("🎶🎶🎶");
        this.price = this.price * 0.9;
    }
    get getPrice(){
        return this.price;
    }

    set setPrice(price){
        this.price = price;
    }

    get getManufactureYear(){
        return this.manufactureYear;
    }

    get getBrand(){
        return this.brand;
    }

    get getId(){
        return this.id;
    }
    static detectSound(sound){
        return // Instrument type   
    }
}

class ElectricGuitar extends ClassicGuitar{
    constructor(manufactureYear, brand, price, numberOfStrings = 6, id, longNeck){
        super(manufactureYear, brand, price, numberOfStrings = 6, id);
        this.longNeck = longNeck;
    }
    play(){
        console.log("🎸🎸🎸");
    }
}

class BassGuitar extends ClassicGuitar{
    constructor(manufactureYear, brand, price, numberOfStrings = 6, id){
        super(manufactureYear, brand, price, numberOfStrings = 4, id);
    }
    playSolo(){
        // Generate Sequence
        return ( "💥", "🤘", "🎵", "📢", "💢", "🕺" );
    }
    play(){
        console.log("🔊🔊🔊");
    }
}
