"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_intergration_1 = require("./react.intergration");
// This gets assigned to the constructor Pulse.intergration
const intergration = {
    ready: false
};
function use(plugin, pulseInstance) {
    const frameworkName = getFrameworkName(plugin);
    switch (frameworkName) {
        case 'react':
            intergrate(react_intergration_1.default, 'react');
            break;
        case 'vue':
            // intergrate(vueIntergration, 'vue');
            break;
        case 'custom':
            if (validateCustomFramework(plugin))
                intergrate(plugin, 'custom');
            break;
    }
    // assign framework constructor to intergration object
    if (frameworkName !== 'custom')
        intergration.frameworkConstructor = plugin;
    // Inject into static property of constructor
    pulseInstance.intergration = intergration;
    // if the intergration is ready, call bind otherwise warn user
    if (intergration.ready)
        intergration.bind(pulseInstance);
    else {
        console.error(`Pulse: Failed to intergrate with framework! It's possible you didn't call Pulse.use() before new Pulse.`);
        // TODO: in some cases one might want to use Pulse without a framework so consider making this warning only show in dev, and making a config option to hide it entirely.
    }
}
exports.default = use;
//******** HELPERS BELOW *******
function intergrate(int, frameworkName) {
    // bind all properties from intergration
    Object.keys(int).forEach(property => {
        intergration[property] = int[property];
    });
    // assign name and set ready
    intergration.name = int.name || frameworkName;
    intergration.ready = true;
}
function validateCustomFramework(customIntergration) {
    let valid = true;
    // check for required properties
    ['name', 'bind', 'updateData'].forEach(property => {
        if (!customIntergration.hasOwnProperty(property))
            valid = false;
    });
    return valid;
}
function getFrameworkName(frameworkConstructor) {
    let name = 'custom';
    if (!frameworkConstructor)
        return name;
    // ATTEMPT CHECK FOR REACT
    if (frameworkConstructor.hasOwnProperty('__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'))
        return 'react';
    // ATTEMPT CHECK FOR VUE
    // this check works in dev, but not prod since Vue is a function that returns a constructor in prod, for some reason.
    if (frameworkConstructor.name === 'Vue')
        return 'vue';
    if (typeof frameworkConstructor === 'function') {
        return 'vue'; // more performant than below since it's kinda annoying to contruct an instance of Vue just to check if it is Vue, but it shouldn't hurt until we add support for more frameworks.
        let maybeVue = new frameworkConstructor();
        if (maybeVue._isVue)
            return 'vue';
    }
    return name;
}
