import { RequestHandler } from 'express';
import { GetOne } from './getOne';
export declare type Update<R> = (id: string, data: R) => Promise<any>;
export declare const update: <R>(doUpdate: Update<R>, doGetOne: GetOne<R>) => RequestHandler;
