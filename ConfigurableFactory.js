function ConfigurableFactory(name) {
    var typeMapper = {};
    var factoryName = name;

    var addTypeSupport = function(typeName, buildFunc) {
        if (!typeName || (!buildFunc && typeof(buildFunc) !== 'function')) {
            throw Error('typeName parameter needs to be defined and buildFunc paramter has to be a function');
        }
        var lcTypeName = typeName.toLowerCase();
        if (typeMapper[lcTypeName]) {
            throw Error('There is already a [' + typeName + '] type defined');
        }
        typeMapper[lcTypeName] = buildFunc;
    }

    var getObject = function(typeName) {
        var lcTypeName = typeName.toLowerCase();
        var builder = typeMapper[lcTypeName];

        if (builder !== undefined) {
            return builder();
        }

        throw Error('Cannot build type:[' + typeName + '], does not know how to...');
    }

    var getName = function() {
        return factoryName;
    }

    return {
        addTypeSupport: addTypeSupport,
        get: getObject,
        getName: getName
    }
}


module.exports = {
    getInstance: ConfigurableFactory
}
