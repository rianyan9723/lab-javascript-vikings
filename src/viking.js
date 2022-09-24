// Soldier
class Soldier {

    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(theDamage){
        this.health -= theDamage;
    }

}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    
    attack(){
        return super.attack(); //previously there is a return, if override, needs to do return here as well 
    }

    receiveDamage(theDamage){
        this.health -= theDamage;
        
        if (this.health > 0){
            return `${this.name} has received ${theDamage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier { 

    attack (){
        return this.strength;
    }

    receiveDamage(theDamage){
        this.health -= theDamage; 
        if (this.health > 0){
            return `A Saxon has received ${theDamage} points of damage`;
        }
        else {
            return "A Saxon has died in combat"
        }

    }

}

// War
class War  {

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];//everything from the constructor needs to have "this"
    }

    //when it is a variable declared outside of the construction, doesn't need "this"
   
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        
        let saxonDamage = randomSaxon.receiveDamage(randomViking.attack()); 
        
        if (randomSaxon.health <= 0){
             this.saxonArmy.splice(randomSaxonIndex,1);
        }

        return saxonDamage;
    }

    saxonAttack(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        
        let vikingDamage  = randomViking.receiveDamage(randomSaxon.attack());

        if (randomViking.health <=0 ){
            this.vikingArmy.splice(randomVikingIndex,1);
        }

        return vikingDamage;
    }

    showStatus(){

        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }

        if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }

        if (this.saxonArmy.length >= 1 & this.vikingArmy.length >= 1){
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }

    }



