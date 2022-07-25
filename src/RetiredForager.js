var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.color = 'grey';
  this.job = 'gamble';
  this.canFly = false;
};

RetiredForagerBee.prototype = Object.create(Bee.prototype);

RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function() {
  this.treasureChest.push('treasure');
};

RetiredForagerBee.prototype.constructor = RetiredForagerBee;