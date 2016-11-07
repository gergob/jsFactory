function SimpleFactory(name) {
  var factoryName = name;

  var getSalesEmployee = function (firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName,
      comission: 0,
      projects: [],
      type: 'sales'
    };
  }
  
  return{
    getSalesEmployee: getSalesEmployee
  }
}

module.exports = {
  getInstance: SimpleFactory
}
