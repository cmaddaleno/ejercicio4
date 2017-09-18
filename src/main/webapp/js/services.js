function helloService () {
  this.sayHello = function (name) {
    return 'Hola ' + name;
  };
  
  this.sayGoodBye = function(name) {
      return 'Adios ' + name;
  };
  
}

function rageService () {
  this.sayHello = function (name) {
    return '¿A que veniste? ' + name;
  };
  
  this.sayGoodBye = function(name) {
      return '¡Vete ya! ' + name;
  };
  
}

/**
 * Module setter
 * @type type
 */
angular
  .module('mpApp.services',[])
  .service('helloService', helloService)
  .service('rageService', rageService);