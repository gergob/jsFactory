var ConfigurableFactory = require('./ConfigurableFactory');

var employeeFactory = ConfigurableFactory.getInstance('EmployeeFactory');

employeeFactory.addTypeSupport('sales', function createSales() {
    return {
        firstName: '',
        lastName: '',
        comission: 0,
        projects: []
    };
});

console.log('Our factory is named:' + employeeFactory.getName());

var johnDoe = employeeFactory.build('sales');
console.log('John Doe is:' + JSON.stringify(johnDoe, null, 2));

try {
  var dannyDoe = employeeFactory.build('ceo');
} catch (e) {
  console.error(e.message);
}
