const dragon = require("./dragon");

class FriendlyDragon extends dragon {
    constructor(name, color, lifeGoals, friend){
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend
    }
    
    hasLifeGoals(){
        this.lifeGoals.forEach((lifeGoal) => console.log(`${this.name} likes to ${lifeGoal}`));
    }

    helpsPeople(){
        return `${this.name} helps their friend ${this.friend}`
    }


}

try {
    module.exports = FriendlyDragon;
  } catch {
    module.exports = null;
  }