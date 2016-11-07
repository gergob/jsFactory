function ConfigurableFactory(name) {
  var typeMapper = {};
  var factoryName = name;

  var addTypeSupport = function (typeName, buildFunc) {
    if (!typeName || (!buildFunc && typeof(buildFunc) !== 'function')) {
        throw Error('typeName parameter needs to be defined and buildFunc paramter has to be a function');
    }
    if (typeMapper[typeName.toLowerCase()]) {
        throw Error('There is already a [' + typeName + '] type defined');
    }
    typeMapper[typeName] = buildFunc;
  }

  var build = function (typeName) {
    var lcTypeName = typeName.toLowerCase();
    var builder = typeMapper[lcTypeName];

    if (builder !== undefined) {
        return builder();
    }

    throw Error('No buildFunc defined for type:[' + typeName + ']');
  }

  var getName = function () {
    return factoryName;
  }

  return {
    addTypeSupport: addTypeSupport,
    build: build,
    getName: getName
  }
}


module.exports = {
    getInstance: ConfigurableFactory
}
