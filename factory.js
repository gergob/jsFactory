function factory() {
    var typeMapper = {};

    var addTypeSupport = function addTypeSupport(typeName, buildFunc) {
        if (!typeName || (!buildFunc && typeof(buildFunc) !== 'function')) {
                throw Error('typeName parameter needs to be defined and buildFunc paramter has to be a function');
            }
            if (typeMapper[typeName.toLowerCase()]) {
                throw Error('There is already a [' + typeName + '] type defined');
            }
            typeMapper[typeName] = buildFunc;
        }

    var build = function build(typeName) {
            if (typeMapper[typeName.toLowerCase()]) {
                return typeMapper[typeName.toLowerCase()]();
            }
            throw Error('No buildFunc defined for type:[' + typeName + ']');
        }

        return {
            addTypeSupport: addTypeSupport,
            build: build
        }
    }

module.exports = {
    factory: factory
}
