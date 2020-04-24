import Pulse from '../pulse';
export interface Intergration {
    ready?: boolean;
    frameworkConstructor?: any;
    name?: any;
    bind?: Function;
    updateMethod?: Function;
    wrapper?: Function;
    onReady?: Function;
}
export default function use(plugin: any, pulseInstance: Pulse): void;
