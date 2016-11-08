function SimpleFactory(name) {
    var factoryName = name;

    var getSalesEmployee = function(firstName, lastName) {
        return {
            firstName: firstName,
            lastName: lastName,
            comission: 0,
            salary: 100,
            projects: [],
            type: 'sales'
        };
    }

    var getEngineerEmployee = function(firstName, lastName) {
        return {
            firstName: firstName,
            lastName: lastName,
            salary: 150,
            manager: '',
            technologies: [],
            projects: [],
            type: 'engineer'
        }
    }

    var getName = function() {
        return factoryName;
    }

    return {
        getSales: getSalesEmployee,
        getEngineer: getEngineerEmployee,
        getName: getName
    }
}

module.exports = {
    getInstance: SimpleFactory
}
