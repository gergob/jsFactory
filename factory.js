function factory(name) {
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
    if (typeMapper[lcTypeName]) {
        return typeMapper[lcTypeName]();
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
    getFactory: factory
}
