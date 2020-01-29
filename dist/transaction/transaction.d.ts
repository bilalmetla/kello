export declare class Transaction {
    private Model;
    private isInTransation;
    private session;
    constructor(model: any);
    start(): any;
    commit(): Promise<void>;
    rollback(): Promise<void>;
}
