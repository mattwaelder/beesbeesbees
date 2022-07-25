

var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

//subclass to prototype obj created from parents protype
Bee.prototype = Object.create(Grub.prototype);

//subclass.prototype.cnstructor = subclass constructor
Bee.prototype.constructor = Bee;
