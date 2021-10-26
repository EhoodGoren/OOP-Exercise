class Person {
    constructor(firstName, sureName, salary, age, id){
        this.firstName = firstName;
        this.sureName = sureName;
        this.salary = salary;
        this.age = age;
        this.id = id;
    }
    get firstName(){
        return this.firstName;
    }
    get sureName(){
        return this.sureName;
    }
    get getSalary(){
        return this.salary;
    }
    get getAge(){
        return this.age;
    }
    get getId(){
        return this.id;
    }
    set setId(id){
        this.id = id;
    }
    set setSalary(salary){
        this.salary = salary;
    }
}

class Player extends Person {
    constructor(firstName, sureName, salary, age, id ,strongLeg, postion, celebrationSentence){
        super(firstName, sureName, salary, age, id);
        this.strongLeg = strongLeg;
        this.postion = postion;
        this.celebrationSentence = celebrationSentence;
    }
    goalCelebration(){
        console.log(this.celebrationSentence);
        this.salary = 1.025 * this.salary;
    }
    get getStrongLeg(){ return this.strongLeg }
    get getPosition(){ return this.postion }
    get getCelebrationSentence(){ return this.celebrationSentence }
    set setCelebrationSentence(celebrationSentence){ this.celebrationSentence = celebrationSentence }
    set setPosition(position){ this.postion = position }
}

class GoalKeeper extends Person {
    constructor(firstName, sureName, salary, age, id, isLeftHanded, lastGoalConceded = Date()){
        super(firstName, sureName, salary, age, id);
        this.isLeftHanded = isLeftHanded;
        this.lastGoalConceded = lastGoalConceded;
    }
    concededAGoal(){
        this.lastGoalConceded = Date();
        this.salary = 0.975 * this.salary;
    }
    get getLastGoalConceded(){
        return this.lastGoalConceded;
    }
}
