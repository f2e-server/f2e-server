import { IncomingMessage, ServerResponse } from "http"
import { F2EConfig } from 'f2e-server'
import { MemoryTree } from "memory-tree"

export interface ExecFn {
    (req: IncomingMessage, resp: ServerResponse): string | false
}
export interface Callback<T extends Object = {}> {
    (req?: IncomingMessage, resp?: ServerResponse, conf?: F2EConfig): T | Promise<T>
}
export interface BaseOutConfig extends Partial<F2EConfig> {
    interval?: number
    
}
export interface ExecOut {
    (fn: Callback, conf?: BaseOutConfig): ExecFn
}

export interface Out {
    Base: (type: string) => ExecOut
    JsonOut: ExecOut
    JsonpOut: ExecOut
    ServerSent: ExecOut
}

export class Route {
    execute: {
        (pathname: string, req: IncomingMessage, res: ServerResponse, memory: MemoryTree.Store): string | false
    }
    on: {
        (reg: string | RegExp, exec: ExecFn): void
    }
}
export declare const out: Out
