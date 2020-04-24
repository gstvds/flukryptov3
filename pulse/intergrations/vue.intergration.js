"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'vue',
    bind(pulseConstructor) {
        pulseConstructor.install = Vue => {
            const pulse = globalThis.__pulse;
            const global = pulse._private.global;
            const config = pulse._private.global.config;
            Vue.mixin({
                beforeCreate() {
                    // bind root properties
                    Object.keys(global.contextRef).forEach(moduleInstance => {
                        this['$' + moduleInstance] = global.contextRef[moduleInstance];
                    });
                    if (pulse.utils)
                        this.$utils = pulse.utils;
                    if (pulse.services)
                        this.$services = pulse.services;
                    // register component with Pulse
                    global.subs.registerComponent(this);
                    // alias map
                    const mapData = global.subs.mapData.bind(global.subs);
                    this.mapData = properties => mapData(properties, this);
                },
                mounted() {
                    if (this.__pulseUniqueIdentifier && config.waitForMount)
                        pulse.mount(this);
                },
                beforeDestroy() {
                    if (this.__pulseUniqueIdentifier && config.autoUnmount)
                        global.subs.unmount(this);
                }
            });
        };
    },
    updateMethod(componentInstance, updatedData) {
        for (let dataKey in updatedData) {
            componentInstance.$set(componentInstance, dataKey, updatedData[dataKey]);
        }
    },
    onReady(pulseConstructor) {
        const Vue = pulseConstructor.intergration.frameworkConstructor;
        Vue.use(pulseConstructor);
    }
};
