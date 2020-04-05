import State from '../state';
import Collection, { DefaultDataItem } from './collection';
export declare type PrimaryKey = string | number;
export declare type GroupName = string | number;
export declare type Index = Array<PrimaryKey>;
export declare class Group<DataType = DefaultDataItem> extends State<Array<PrimaryKey>> {
    private collection;
    masterOutput: Array<any>;
    missingPrimaryKeys: Array<PrimaryKey>;
    computedFunc?: (data: DataType) => DataType;
    get output(): Array<any>;
    constructor(collection: () => Collection);
    build(): void;
    has(primaryKey: PrimaryKey): boolean;
    compute(func: (data: DataType) => DataType): void;
    add(primaryKey: PrimaryKey): void;
}
export default Group;
