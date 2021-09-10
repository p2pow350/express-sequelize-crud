import { RequestHandler } from 'express';
export declare type Destroy = (id: string) => Promise<any>;
export declare const destroy: (doDetroy: Destroy) => RequestHandler;
