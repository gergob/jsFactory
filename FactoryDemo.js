var ConfigurableFactory = require('./ConfigurableFactory');
var SimpleFactory = require('./SimpleFactory');

function FactoryDemo(demoName, factory) {
    var SEPARATOR = '=============================================================';
    var HEADER_PREFIX = '          ';

    return {
        demoConfigurableFactory: function() {
            console.log(SEPARATOR);
            console.log(HEADER_PREFIX, 'ConfigurableFactory sample')
            console.log(SEPARATOR);

            var employeeFactory = ConfigurableFactory.getInstance('EmployeeFactory');

            employeeFactory.addTypeSupport('sales', function createSales() {
                return {
                    firstName: '',
                    lastName: '',
                    comission: 0,
                    projects: [],
                    type: 'sales'
                };
            });

            employeeFactory.addTypeSupport('engineer', function createSales() {
                return {
                    firstName: '',
                    lastName: '',
                    salar: 150,
                    manager: '',
                    technologies: [],
                    projects: [],
                    type: 'engineer'
                };
            });

            console.log('The factory is called: [' + employeeFactory.getName() + ']');

            var johnDoe = employeeFactory.build('sales');
            console.log('John Doe is:');
            console.log(JSON.stringify(johnDoe, null, 2));

            try {
                console.log('Trying to build CEO...');
                var dannyDoe = employeeFactory.build('ceo');
            } catch (e) {
                console.error(e.message);
            }
        },
        demoSimpleFactory: function() {
            var simpleFactory = SimpleFactory.getInstance('SimpleEmployeeFactory');

            console.log(SEPARATOR);
            console.log(HEADER_PREFIX, 'SimpleFactory sample')
            console.log(SEPARATOR);

            console.log('The factory is called: [' + simpleFactory.getName() + ']');

            console.log('We have a new sales colleague:');
            var janeDoe = simpleFactory.getSales('Jane', 'Doe');
            console.log(JSON.stringify(janeDoe, null, 2));

            console.log();
            console.log('We have a new engineer colleague:');
            var billDoe = simpleFactory.getEngineer('Bill', 'Doe');
            console.log(JSON.stringify(billDoe, null, 2));
        }

    }
}

module.exports = {
    FactoryDemo: FactoryDemo
}
