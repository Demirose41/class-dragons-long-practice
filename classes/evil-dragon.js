const dragon = require("./dragon");

class EvilDragon extends dragon {
    constructor(name, color, evilDoings, nemesis){
        super(name, color);
        this.evilDoings = evilDoings,
        this.nemesis = nemesis
    }

    dontInviteThemOverForDinner(){
        this.evilDoings.forEach((evil) => console.log(`${this.name} will ${evil}`));
    }

    burnsNemesis(){
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    }

}

try {
    module.exports = EvilDragon;
  } catch {
    module.exports = null;
  }