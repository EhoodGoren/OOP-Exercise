class Person {
    #id;
    constructor(firstName, sureName, salary, age, id){
        this._firstName = firstName;
        this._sureName = sureName;
        this._salary = salary;
        this._age = age;
        this.#id = id;
    }

    // Getters
    get firstName(){ return this._firstName; }
    get sureName(){ return this._sureName; }
    get salary(){ return this._salary; }
    get age(){ return this._age; }
    get id(){ return this._id; }

    // Setter
    set setSalary(salary){
        this.salary = salary;
    }
}

class Player extends Person {
    constructor(firstName, sureName, salary, age, id ,strongLeg, postion, celebrationSentence){
        super(firstName, sureName, salary, age, id);
        this._strongLeg = strongLeg;
        this._postion = postion;
        this._celebrationSentence = celebrationSentence;
    }
    
    // Getters
    get strongLeg(){ return this._strongLeg }
    get position(){ return this._postion }
    get celebrationSentence(){ return this._celebrationSentence }
    
    // Setters
    set setCelebrationSentence(celebrationSentence){
        this._celebrationSentence = celebrationSentence;
    }
    set setPosition(position){
        this._postion = position;
    }

    goalCelebration(){
        console.log(this._celebrationSentence);
        this._salary = 1.025 * this._salary;
    }
}

class GoalKeeper extends Person {
    constructor(firstName, sureName, salary, age, id, isLeftHanded, lastGoalConceded = Date()){
        super(firstName, sureName, salary, age, id);
        this._isLeftHanded = isLeftHanded;
        this._lastGoalConceded = lastGoalConceded;
    }

    // Getters
    get isLeftHanded(){ return this._isLeftHanded; }
    get lastGoalConceded(){ return this._lastGoalConceded; }

    // Setter
    set setLastGoalConceded(time){
        this._lastGoalConceded = time;
    }

    concededAGoal(){
        this._lastGoalConceded = Date();
        this._salary = 0.975 * this._salary;
    }
}
